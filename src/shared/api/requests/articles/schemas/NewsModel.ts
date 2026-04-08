import 'server-only'

import mongoose, { Model } from 'mongoose'

import { ArticleSchema, type IArticleDoc } from './NewsSchema'

export const ArticleModel: Model<IArticleDoc> =
  mongoose.models.News || mongoose.model<IArticleDoc>('News', ArticleSchema, 'news')
