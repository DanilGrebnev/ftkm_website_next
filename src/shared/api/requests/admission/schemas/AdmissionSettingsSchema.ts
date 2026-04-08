import 'server-only'

import mongoose, { Schema } from 'mongoose'

import type { IAdmissionItemDTO } from '../DTO/AdmissionItemDTO'

export const ADMISSION_SETTINGS_ID = 'admission-settings' as const

export interface IAdmissionItemDoc extends IAdmissionItemDTO {}

export interface IAdmissionSettingsPlain {
  _id: string
  items: IAdmissionItemDoc[]
}

const AdmissionItemSchema = new Schema(
  {
    direction: { type: String, required: true },
    budgetPlaces: { type: Number, required: true },
    passingScore: { type: String, required: true },
    additionalInformation: { type: String, default: '' },
  },
  { _id: false }
)

export const AdmissionSettingsSchema = new Schema(
  {
    _id: { type: String, required: true },
    items: { type: [AdmissionItemSchema], default: [] },
  },
  { versionKey: false }
)
