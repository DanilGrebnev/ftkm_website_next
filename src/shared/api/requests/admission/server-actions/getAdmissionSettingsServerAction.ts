'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'

import { ADMISSION_SETTINGS_ID } from '../schemas/AdmissionSettingsSchema'
import { AdmissionSettingsModel } from '../schemas/AdmissionSettingsModel'
import type { IGetAdmissionSettingsResponseDTO } from '../DTO/GetAdmissionSettingsDTO'
import { serializeAdmissionItems } from './helpers'

export async function getAdmissionSettingsServerAction(): Promise<IGetAdmissionSettingsResponseDTO> {
  return withServerErrorLog('Получение настроек поступления', async () => {
    await dbConnect()

    const doc = await AdmissionSettingsModel.findById(ADMISSION_SETTINGS_ID)
      .lean()
      .exec()

    if (!doc) {
      return { items: [] }
    }

    return { items: serializeAdmissionItems(doc) }
  })
}
