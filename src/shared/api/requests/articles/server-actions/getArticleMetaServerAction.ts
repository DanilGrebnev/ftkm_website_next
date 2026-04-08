'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { ArticleModel } from '../schemas/NewsModel'
import type {
  IGetArticleMetaRequestDTO,
  IGetArticleMetaResponseDTO,
} from '../DTO/GetArticleMetaDTO'

export async function getArticleMetaServerAction(
  id: IGetArticleMetaRequestDTO['id']
): Promise<IGetArticleMetaResponseDTO | null> {
  return withServerErrorLog(`SEO: новость по id (${id})`, async () => {
    await dbConnect()
    const doc = await ArticleModel.findById(id)
      .select('title body')
      .lean()
      .exec()
    if (!doc) return null
    return { title: doc.title, body: doc.body }
  })
}
