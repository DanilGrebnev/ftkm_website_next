import 'server-only'

import mongoose, { Schema, Document } from 'mongoose'

export interface IArticleFileDoc {
  newsId: string
  name: string
  data: string
  extension: string
}

export interface IArticleDoc extends Document {
  title: string
  body: string
  video: string
  createdDate: number
  files: IArticleFileDoc[]
}

const FileSubSchema = new Schema(
  {
    newsId: { type: String },
    name: { type: String },
    data: { type: String },
    extension: { type: String },
  },
  { _id: false }
)

function generateCreatedDate(): number {
  const now = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
  return new Date(dateStr).getTime()
}

export const ArticleSchema = new Schema<IArticleDoc>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    video: { type: String, default: '' },
    createdDate: { type: Number, default: generateCreatedDate },
    files: { type: [FileSubSchema], default: [] },
  },
  { versionKey: false }
)
