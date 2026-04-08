export interface IAdmissionItemDTO {
  direction: string
  budgetPlaces: number
  passingScore: string
  additionalInformation?: string
}

export type IAdmissionItem = IAdmissionItemDTO
