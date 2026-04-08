'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'
import { NewsModel } from '@/entities/article/api/models/news'
import { revalidatePath } from 'next/cache'
import { getSessionServerAction } from '@/shared/api/requests/users'

import path from 'path'
import fs from 'fs/promises'

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')

async function ensureUploadsDir() {
    await fs.mkdir(UPLOADS_DIR, { recursive: true })
}

function generateFileName(originalName: string): string {
    const ext = path.extname(originalName)
    const base = path.basename(originalName, ext)
    const timestamp = Date.now()
    return `${base}_${timestamp}${ext}`
}

export async function uploadNewsFile(newsId: string, formData: FormData) {
    return withServerErrorLog(`Загрузка файла к новости (${newsId})`, async () => {
        const session = await getSessionServerAction()

        if (!session) throw new Error('Unauthorized')

        await dbConnect()
        await ensureUploadsDir()

        const file = formData.get('file') as File | null
        if (!file) throw new Error('No file provided')

        const arrayBuffer = await file.arrayBuffer()
        const uint8 = new Uint8Array(arrayBuffer)
        const fileName = generateFileName(file.name)
        const filePath = path.join(UPLOADS_DIR, fileName)

        await fs.writeFile(filePath, uint8)

        const ext = path.extname(file.name)

        const news = await NewsModel.findById(newsId).exec()
        if (!news) {
            await fs.unlink(filePath).catch(() => {})
            throw new Error('News not found')
        }

        news.files.push({
            newsId,
            name: fileName,
            data: filePath,
            extension: ext,
        })

        await news.save()

        const plain = JSON.parse(JSON.stringify(news.toObject()))

        revalidatePath('/CMS')
        revalidatePath(`/news/${newsId}`)

        return plain.files
    })
}

export async function deleteNewsFile({
    newsId,
    fileName,
}: {
    newsId: string
    fileName: string
}) {
    return withServerErrorLog(`Удаление файла новости (${newsId}, ${fileName})`, async () => {
        const session = await getSessionServerAction()
        if (!session) throw new Error('Unauthorized')

        await dbConnect()

        const news = await NewsModel.findById(newsId).exec()
        if (!news) throw new Error('News not found')

        const filePath = path.join(UPLOADS_DIR, fileName)
        await fs.unlink(filePath).catch(() => {})

        news.files = news.files.filter((f) => f.name !== fileName) as any

        await news.save()

        const plain = JSON.parse(JSON.stringify(news.toObject()))

        revalidatePath('/CMS')
        revalidatePath(`/news/${newsId}`)

        return plain.files
    })
}