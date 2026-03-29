'use server'

import { dbConnect } from '@/shared/server_actions/db'
import {
    logServerError,
    withServerErrorLog,
} from '@/shared/server_actions/logServerError'
import { NewsModel } from '@/entities/article/model/server_actions/models/News'
import { revalidatePath } from 'next/cache'
import { getSession } from '@/entities/auth/model/server_actions/auth'

export interface NewsFilters {
    title?: string
    createdDate?: Record<string, string>
}

function buildMongoFilter(filters?: NewsFilters) {
    if (!filters) return {}

    const query: Record<string, any> = {}

    if (filters.title) {
        query.title = { $regex: filters.title, $options: 'i' }
    }

    if (filters.createdDate) {
        query.createdDate = {}
        for (const [op, val] of Object.entries(filters.createdDate)) {
            query.createdDate[op] = val
        }
    }

    return query
}

function serialize<T>(doc: T): any {
    return JSON.parse(JSON.stringify(doc))
}

async function getNewsPageCore({
    skip = 0,
    limit = 8,
    filters,
}: {
    skip?: number
    limit?: number
    filters?: NewsFilters
}) {
    await dbConnect()

    const mongoFilter = buildMongoFilter(filters)

    const [data, totalCount] = await Promise.all([
        NewsModel.find(mongoFilter)
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit)
            .lean()
            .exec(),
        NewsModel.countDocuments(mongoFilter).exec(),
    ])

    return { data: serialize(data), totalCount }
}

export async function getNewsPage(params: {
    skip?: number
    limit?: number
    filters?: NewsFilters
}) {
    return withServerErrorLog(
        'Получение списка новостей (пагинация)',
        () => getNewsPageCore(params)
    )
}

export async function getLastNews(amount: number = 3) {
    return withServerErrorLog('Получение последних новостей', () =>
        getNewsPageCore({ skip: 0, limit: amount })
    )
}

export type LastNewsForHomeResult =
    | { ok: true; data: unknown[] }
    | { ok: false }

/** Главная (публичная): без throw; ok:false при ошибке БД. */
export async function getLastNewsForPublicHome(
    limit: number
): Promise<LastNewsForHomeResult> {
    try {
        const { data } = await getNewsPageCore({ skip: 0, limit })
        return { ok: true, data }
    } catch (error) {
        logServerError('Получение последних новостей (главная, публично)', error)
        return { ok: false }
    }
}

export async function getNewsById(id: string) {
    return withServerErrorLog(`Получение новости по id (${id})`, async () => {
        await dbConnect()

        const doc = await NewsModel.findById(id).lean().exec()
        if (!doc) return null

        return serialize(doc)
    })
}

/** Лёгкая выборка только для SEO (metadata). */
export async function getNewsMetaById(
    id: string
): Promise<{ title: string; body: string } | null> {
    return withServerErrorLog(`SEO: новость по id (${id})`, async () => {
        await dbConnect()
        const doc = await NewsModel.findById(id)
            .select('title body')
            .lean()
            .exec()
        if (!doc) return null
        return { title: doc.title, body: doc.body }
    })
}

/** Список id для sitemap (без тела новостей). */
export async function getAllNewsIdsForSitemap(): Promise<
    { id: string; lastModified: Date }[]
> {
    return withServerErrorLog('Список id новостей для sitemap', async () => {
        await dbConnect()

        const docs = await NewsModel.find({})
            .select('_id createdDate')
            .sort({ _id: -1 })
            .lean()
            .exec()

        return docs.map((doc) => ({
            id: String(doc._id),
            lastModified: (doc.createdDate
                ? new Date(doc.createdDate)
                : new Date()) as Date,
        }))
    })
}

export async function createNews(body: {
    title: string
    body: string
    video?: string
}) {
    return withServerErrorLog('Создание новости', async () => {
        const session = await getSession()
        if (!session) throw new Error('Unauthorized')

        await dbConnect()

        const doc = new NewsModel({
            title: body.title,
            body: body.body,
            video: body.video || '',
        })

        const saved = await doc.save()

        revalidatePath('/')
        revalidatePath('/news')
        revalidatePath('/CMS')

        return serialize(saved.toObject())
    })
}

export async function updateNews(
    id: string,
    body: { title: string; body: string; video?: string }
) {
    return withServerErrorLog(`Обновление новости (${id})`, async () => {
        const session = await getSession()
        if (!session) throw new Error('Unauthorized')

        await dbConnect()

        const updated = await NewsModel.findByIdAndUpdate(
            id,
            { title: body.title, body: body.body, video: body.video || '' },
            { new: true }
        )
            .lean()
            .exec()

        if (!updated) throw new Error('News not found')

        revalidatePath('/')
        revalidatePath('/news')
        revalidatePath(`/news/${id}`)
        revalidatePath('/CMS')

        return serialize(updated)
    })
}

export async function deleteNews(id: string) {
    return withServerErrorLog(`Удаление новости (${id})`, async () => {
        const session = await getSession()
        if (!session) throw new Error('Unauthorized')

        await dbConnect()

        const doc = await NewsModel.findById(id).lean().exec()
        if (!doc) throw new Error('News not found')

        const fs = await import('fs/promises')
        const path = await import('path')
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads')

        await Promise.allSettled(
            (doc.files || []).map((file) =>
                fs.unlink(path.join(uploadsDir, file.name)).catch(() => {})
            )
        )

        await NewsModel.findByIdAndDelete(id).exec()

        revalidatePath('/')
        revalidatePath('/news')
        revalidatePath('/CMS')

        return { success: true }
    })
}