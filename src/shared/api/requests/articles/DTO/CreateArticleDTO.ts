import type { IArticleDTO } from './ArticleDTO'

export interface ICreateArticleRequestDTO {
  title: string
  body: string
  video?: string
}

export interface ICreateArticleResponseDTO {
  article: IArticleDTO
}
