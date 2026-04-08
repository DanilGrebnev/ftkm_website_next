'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { ArticleModel } from '../schemas/NewsModel'
import type { IGetAllArticleIdsResponseDTO } from '../DTO/GetAllArticleIdsDTO'

export async function getAllArticleIdsServerAction(): Promise<IGetAllArticleIdsResponseDTO[]> {
  return withServerErrorLog('Список id новостей для sitemap', async () => {
    await dbConnect()

    const docs = await ArticleModel.find({})
      .select('_id createdDate')
      .sort({ _id: -1 })
      .lean()
      .exec()

    return docs.map((doc) => ({
      id: typeof doc._id === 'string' ? doc._id : doc._id.toString(),
      lastModified: doc.createdDate ? new Date(doc.createdDate) : new Date(),
    }))
  })
}
