'use server'

import path from 'path'
import fs from 'fs/promises'
import { revalidatePath } from 'next/cache'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { getSessionServerAction } from '../../users/server-actions/getSessionServerAction'
import { ArticleModel } from '../schemas/NewsModel'
import type {
  IUploadArticleFileRequestDTO,
  IUploadArticleFileResponseDTO,
} from '../DTO/ArticleFileDTO'

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

export async function uploadArticleFileServerAction(
  articleId: IUploadArticleFileRequestDTO['articleId'],
  formData: IUploadArticleFileRequestDTO['formData']
): Promise<IUploadArticleFileResponseDTO> {
  return withServerErrorLog(`Загрузка файла к новости (${articleId})`, async () => {
    const session = await getSessionServerAction()
    if (!session) {
      throw new Error('Unauthorized')
    }

    await dbConnect()
    await ensureUploadsDir()

    const file = formData.get('file') as File | null
    if (!file) {
      throw new Error('No file provided')
    }

    const arrayBuffer = await file.arrayBuffer()
    const uint8 = new Uint8Array(arrayBuffer)
    const fileName = generateFileName(file.name)
    const filePath = path.join(UPLOADS_DIR, fileName)

    await fs.writeFile(filePath, uint8)

    const ext = path.extname(file.name)

    const news = await ArticleModel.findById(articleId).exec()
    if (!news) {
      await fs.unlink(filePath).catch(() => {})
      throw new Error('News not found')
    }

    news.files.push({
      newsId: articleId,
      name: fileName,
      data: filePath,
      extension: ext,
    } as any)

    await news.save()

    const plain = JSON.parse(JSON.stringify(news.toObject()))

    revalidatePath('/CMS')
    revalidatePath(`/news/${articleId}`)

    return { files: plain.files }
  })
}
