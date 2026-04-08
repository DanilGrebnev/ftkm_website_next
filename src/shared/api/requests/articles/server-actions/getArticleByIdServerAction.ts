'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { ArticleModel } from '../schemas/NewsModel'
import { mapArticleDocToDTO } from './helpers'
import type {
  IGetArticleByIdRequestDTO,
  IGetArticleByIdResponseDTO,
} from '../DTO/GetArticleByIdDTO'

export async function getArticleByIdServerAction(
  id: IGetArticleByIdRequestDTO['id']
): Promise<IGetArticleByIdResponseDTO> {
  return withServerErrorLog(`Получение новости по id (${id})`, async () => {
    await dbConnect()

    const doc = await ArticleModel.findById(id).lean().exec()
    if (!doc) return { article: null }

    return { article: mapArticleDocToDTO(doc) }
  })
}
