import 'server-only'

import mongoose from 'mongoose'

import { MONGODB_URI } from '@/shared/settings/settings'

let cached = (global as any).mongoose as {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error(
      'MONGODB_URI не задан в окружении. Укажите полную строку подключения в .env'
    )
  }

  if (cached.conn) return cached.conn

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI)
    }

    cached.conn = await cached.promise
    return cached.conn
  } catch (error) {
    console.error(
      'Ошибка подключения к базе данных:',
      error instanceof Error ? error.message : error
    )
    cached.promise = null
    cached.conn = null
    throw error
  }
}
