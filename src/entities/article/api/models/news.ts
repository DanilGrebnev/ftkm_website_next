import 'server-only'

import mongoose, { Model } from 'mongoose'

import { NewsSchema, type INewsDoc } from '@/entities/article/api/schemas/news'

export const NewsModel: Model<INewsDoc> =
    mongoose.models.News || mongoose.model<INewsDoc>('News', NewsSchema, 'news')
