import type { IArticleDTO } from './ArticleDTO'

export interface IGetArticleByIdRequestDTO {
  id: string
}

export interface IGetArticleByIdResponseDTO {
  article: IArticleDTO | null
}
