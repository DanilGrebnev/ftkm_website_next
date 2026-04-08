'use server'

import path from 'path'
import fs from 'fs/promises'
import { revalidatePath } from 'next/cache'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { getSessionServerAction } from '../../users/server-actions/getSessionServerAction'
import { ArticleModel } from '../schemas/NewsModel'
import type {
  IDeleteArticleFileRequestDTO,
  IDeleteArticleFileResponseDTO,
} from '../DTO/ArticleFileDTO'

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')

export async function deleteArticleFileServerAction({
  articleId,
  fileName,
}: IDeleteArticleFileRequestDTO): Promise<IDeleteArticleFileResponseDTO> {
  return withServerErrorLog(`Удаление файла новости (${articleId}, ${fileName})`, async () => {
    const session = await getSessionServerAction()
    if (!session) {
      throw new Error('Unauthorized')
    }

    await dbConnect()

    const news = await ArticleModel.findById(articleId).exec()
    if (!news) throw new Error('News not found')

    const filePath = path.join(UPLOADS_DIR, fileName)
    await fs.unlink(filePath).catch(() => {})

    news.files = news.files.filter((f) => f.name !== fileName) as any

    await news.save()

    const plain = JSON.parse(JSON.stringify(news.toObject()))

    revalidatePath('/CMS')
    revalidatePath(`/news/${articleId}`)

    return { files: plain.files }
  })
}
