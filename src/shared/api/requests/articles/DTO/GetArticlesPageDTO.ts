import type { IArticleDTO } from './ArticleDTO'

export interface IGetArticlesPageRequestDTO {
  skip?: number
  limit?: number
  filters?: {
    title?: string
    createdDate?: Record<string, string>
  }
}

export interface IGetArticlesPageResponseDTO {
  data: IArticleDTO[]
  totalCount: number
}
