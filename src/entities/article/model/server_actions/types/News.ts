export interface INewsItem {
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
    files: INewsFiles[]
}

export interface INewsFiles {
    newsId: string
    name: string
    data: string
    extension: string
}

export interface INewsFields {
    title: string
    body: string
    video: string
    files: INewsFiles[] | []
}

export interface INewsDataResponse {
    data: INewsFields
}

export interface IGetNews<N = number> {
    skip?: N
    limit?: N
    filter?: string
}

export interface IBody extends INewsFields {}
