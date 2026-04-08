import type { IArticleDTO } from './ArticleDTO'

export interface IUpdateArticleRequestDTO {
  id: string
  title: string
  body: string
  video?: string
}

export interface IUpdateArticleResponseDTO {
  article: IArticleDTO
}
