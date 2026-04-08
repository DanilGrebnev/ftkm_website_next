export interface IArticleFileDTO {
  newsId: string
  name: string
  data: string
  extension: string
}

export interface IArticleDTO {
  _id: string
  title: string
  body: string
  video: string
  createdDay: number
  createdMonth: number
  createdYear: number
  createdDate: number
  updatedAt?: number
  createdAt?: number
  isDeleteLoading?: boolean
  files: IArticleFileDTO[]
}
