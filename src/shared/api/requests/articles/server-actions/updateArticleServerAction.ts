'use server'

import { revalidatePath } from 'next/cache'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { getSessionServerAction } from '../../users/server-actions/getSessionServerAction'
import { ArticleModel } from '../schemas/NewsModel'
import { mapArticleDocToDTO } from './helpers'
import type {
  IUpdateArticleRequestDTO,
  IUpdateArticleResponseDTO,
} from '../DTO/UpdateArticleDTO'

const REVALIDATE_PATHS = ['/', '/news', '/CMS']

export async function updateArticleServerAction(
  id: IUpdateArticleRequestDTO['id'],
  body: Omit<IUpdateArticleRequestDTO, 'id'>
): Promise<IUpdateArticleResponseDTO> {
  return withServerErrorLog(`Обновление новости (${id})`, async () => {
    const session = await getSessionServerAction()
    if (!session) {
      throw new Error('Unauthorized')
    }

    await dbConnect()

    const updated = await ArticleModel.findByIdAndUpdate(
      id,
      { title: body.title, body: body.body, video: body.video || '' },
      { new: true }
    )
      .lean()
      .exec()

    if (!updated) {
      throw new Error('News not found')
    }

    for (const path of [...REVALIDATE_PATHS, `/news/${id}`]) {
      revalidatePath(path)
    }

    return { article: mapArticleDocToDTO(updated) }
  })
}
