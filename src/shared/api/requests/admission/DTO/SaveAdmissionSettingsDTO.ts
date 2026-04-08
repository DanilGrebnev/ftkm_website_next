import type { IAdmissionItemDTO } from './AdmissionItemDTO'

export interface ISaveAdmissionSettingsRequestDTO {
  items: unknown
}

export interface ISaveAdmissionSettingsSuccessResponseDTO {
  ok: true
  items: IAdmissionItemDTO[]
}

export interface ISaveAdmissionSettingsErrorResponseDTO {
  ok: false
  error: string
}

export type ISaveAdmissionSettingsResponseDTO =
  | ISaveAdmissionSettingsSuccessResponseDTO
  | ISaveAdmissionSettingsErrorResponseDTO
