'use server'

import { revalidatePath } from 'next/cache'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { getSessionServerAction } from '../../users/server-actions/getSessionServerAction'
import { ArticleModel } from '../schemas/NewsModel'
import { mapArticleDocToDTO } from './helpers'
import type {
  ICreateArticleRequestDTO,
  ICreateArticleResponseDTO,
} from '../DTO/CreateArticleDTO'

const REVALIDATE_PATHS = ['/', '/news', '/CMS']

export async function createArticleServerAction(
  body: ICreateArticleRequestDTO
): Promise<ICreateArticleResponseDTO> {
  return withServerErrorLog('Создание новости', async () => {
    const session = await getSessionServerAction()
    if (!session) {
      throw new Error('Unauthorized')
    }

    await dbConnect()

    const doc = new ArticleModel({
      title: body.title,
      body: body.body,
      video: body.video || '',
    })

    const saved = await doc.save()

    for (const path of REVALIDATE_PATHS) {
      revalidatePath(path)
    }

    return { article: mapArticleDocToDTO(saved.toObject()) }
  })
}
