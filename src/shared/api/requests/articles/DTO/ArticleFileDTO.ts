import type { IArticleFileDTO } from './ArticleDTO'

export interface IUploadArticleFileRequestDTO {
  articleId: string
  formData: FormData
}

export interface IUploadArticleFileResponseDTO {
  files: IArticleFileDTO[]
}

export interface IDeleteArticleFileRequestDTO {
  articleId: string
  fileName: string
}

export interface IDeleteArticleFileResponseDTO {
  files: IArticleFileDTO[]
}
