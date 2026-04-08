import type { IArticleDTO } from './ArticleDTO'

export interface IGetLastArticlesRequestDTO {
  amount?: number
}

export interface IGetLastArticlesResponseDTO {
  data: IArticleDTO[]
  totalCount: number
}
