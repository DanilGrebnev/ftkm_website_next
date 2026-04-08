import { useQuery } from '@tanstack/react-query'

import { getAdmissionSettingsServerAction } from '../server-actions/getAdmissionSettingsServerAction'
import type { IGetAdmissionSettingsResponseDTO } from '../DTO/GetAdmissionSettingsDTO'

export const ADMISSION_SETTINGS_QUERY_KEY = ['admission', 'settings'] as const

export function useAdmissionSettingsQuery() {
  return useQuery<IGetAdmissionSettingsResponseDTO>({
    queryKey: ADMISSION_SETTINGS_QUERY_KEY,
    queryFn: () => getAdmissionSettingsServerAction(),
  })
}
