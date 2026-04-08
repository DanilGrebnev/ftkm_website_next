'use server'

import { revalidatePath } from 'next/cache'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { getSessionServerAction } from '../../users/server-actions/getSessionServerAction'
import { ADMISSION_SETTINGS_ID } from '../schemas/AdmissionSettingsSchema'
import { AdmissionSettingsModel } from '../schemas/AdmissionSettingsModel'
import {
  type ISaveAdmissionSettingsRequestDTO,
  type ISaveAdmissionSettingsResponseDTO,
} from '../DTO/SaveAdmissionSettingsDTO'
import { normalizeAdmissionItems } from './helpers'

export async function saveAdmissionSettingsServerAction(
  payload: ISaveAdmissionSettingsRequestDTO
): Promise<ISaveAdmissionSettingsResponseDTO> {
  return withServerErrorLog('Сохранение настроек поступления', async () => {
    const session = await getSessionServerAction()
    if (!session) {
      return { ok: false, error: 'Unauthorized' }
    }

    const items = normalizeAdmissionItems(payload.items)

    await dbConnect()

    await AdmissionSettingsModel.findByIdAndUpdate(
      ADMISSION_SETTINGS_ID,
      { $set: { items } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).exec()

    revalidatePath('/')
    revalidatePath('/CMS')
    revalidatePath('/CMS/admission')

    return { ok: true, items }
  })
}
