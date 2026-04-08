'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { ArticleModel } from '../schemas/NewsModel'
import { buildNewsMongoFilter, mapArticleDocsToDTO } from './helpers'
import type {
  IGetArticlesPageRequestDTO,
  IGetArticlesPageResponseDTO,
} from '../DTO/GetArticlesPageDTO'

async function getArticlesPageCore({
  skip = 0,
  limit = 8,
  filters,
}: IGetArticlesPageRequestDTO): Promise<IGetArticlesPageResponseDTO> {
  await dbConnect()

  const mongoFilter = buildNewsMongoFilter(filters)

  const [data, totalCount] = await Promise.all([
    ArticleModel.find(mongoFilter)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean()
      .exec(),
    ArticleModel.countDocuments(mongoFilter).exec(),
  ])

  return { data: mapArticleDocsToDTO(data), totalCount }
}

export async function getArticlesPageServerAction(
  params: IGetArticlesPageRequestDTO
): Promise<IGetArticlesPageResponseDTO> {
  return withServerErrorLog('Получение списка новостей (пагинация)', () =>
    getArticlesPageCore(params)
  )
}

export async function getLastArticlesServerAction(
  amount: number = 3
): Promise<IGetArticlesPageResponseDTO> {
  return withServerErrorLog('Получение последних новостей', () =>
    getArticlesPageCore({ skip: 0, limit: amount })
  )
}
