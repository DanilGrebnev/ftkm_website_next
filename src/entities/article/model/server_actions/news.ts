'use server'

import { dbConnect } from '@/shared/server_actions/db'
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

export async function getNewsPage({
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

export async function getLastNews(amount: number = 3) {
    return getNewsPage({ skip: 0, limit: amount })
}

export async function getNewsById(id: string) {
    await dbConnect()

    const doc = await NewsModel.findById(id).lean().exec()
    if (!doc) return null

    return serialize(doc)
}

export async function createNews(body: {
    title: string
    body: string
    video?: string
}) {
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
}

export async function updateNews(
    id: string,
    body: { title: string; body: string; video?: string }
) {
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
}

export async function deleteNews(id: string) {
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
}
