import type { IAdmissionItemDTO } from '../DTO/AdmissionItemDTO'

export function serializeAdmissionItems(
  doc: { items?: IAdmissionItemDTO[] } | null
): IAdmissionItemDTO[] {
  if (!doc?.items?.length) {
    return []
  }

  return JSON.parse(JSON.stringify(doc.items))
}

export function normalizeAdmissionItems(raw: unknown): IAdmissionItemDTO[] {
  if (!Array.isArray(raw)) {
    return []
  }

  const items: IAdmissionItemDTO[] = []

  for (const row of raw) {
    if (!row || typeof row !== 'object') continue

    const record = row as Record<string, unknown>

    const direction =
      typeof record.direction === 'string' ? record.direction.trim() : ''

    const budgetRaw = record.budgetPlaces
    const budgetPlaces =
      typeof budgetRaw === 'number' && Number.isFinite(budgetRaw)
        ? budgetRaw
        : typeof budgetRaw === 'string'
          ? parseInt(budgetRaw, 10)
          : NaN

    const passingScore =
      typeof record.passingScore === 'string' ? record.passingScore.trim() : ''

    const additionalInformation =
      typeof record.additionalInformation === 'string'
        ? record.additionalInformation.trim()
        : ''

    if (!direction || !Number.isFinite(budgetPlaces) || !passingScore) {
      continue
    }

    items.push(
      additionalInformation
        ? {
            direction,
            budgetPlaces,
            passingScore,
            additionalInformation,
          }
        : {
            direction,
            budgetPlaces,
            passingScore,
          }
    )
  }

  return items
}
