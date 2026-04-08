'use server'

import path from 'path'
import fs from 'fs/promises'
import { revalidatePath } from 'next/cache'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { getSessionServerAction } from '../../users/server-actions/getSessionServerAction'
import { ArticleModel } from '../schemas/NewsModel'
import { ensureArticleExists } from './helpers'
import type {
  IDeleteArticleRequestDTO,
  IDeleteArticleResponseDTO,
} from '../DTO/DeleteArticleDTO'

const REVALIDATE_PATHS = ['/', '/news', '/CMS']
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')

export async function deleteArticleServerAction(
  id: IDeleteArticleRequestDTO['id']
): Promise<IDeleteArticleResponseDTO> {
  return withServerErrorLog(`Удаление новости (${id})`, async () => {
    const session = await getSessionServerAction()
    if (!session) {
      throw new Error('Unauthorized')
    }

    await dbConnect()

    const doc = await ensureArticleExists(id)

    await Promise.allSettled(
      (doc.files || []).map((file: any) =>
        fs.unlink(path.join(UPLOADS_DIR, file.name)).catch(() => {})
      )
    )

    await ArticleModel.findByIdAndDelete(id).exec()

    for (const pathToRevalidate of REVALIDATE_PATHS) {
      revalidatePath(pathToRevalidate)
    }

    return { success: true }
  })
}
