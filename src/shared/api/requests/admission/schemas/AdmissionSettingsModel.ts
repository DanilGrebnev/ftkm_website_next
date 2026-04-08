import 'server-only'

import mongoose, { Model } from 'mongoose'

import {
  AdmissionSettingsSchema,
  type IAdmissionSettingsPlain,
} from './AdmissionSettingsSchema'

export const AdmissionSettingsModel: Model<IAdmissionSettingsPlain> =
  mongoose.models.AdmissionSettings ||
  mongoose.model<IAdmissionSettingsPlain>(
    'AdmissionSettings',
    AdmissionSettingsSchema,
    'admission_settings'
  )
