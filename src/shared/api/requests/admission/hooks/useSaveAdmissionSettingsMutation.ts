import { useMutation, useQueryClient } from '@tanstack/react-query'

import { saveAdmissionSettingsServerAction } from '../server-actions/saveAdmissionSettingsServerAction'
import type {
  ISaveAdmissionSettingsRequestDTO,
  ISaveAdmissionSettingsResponseDTO,
} from '../DTO/SaveAdmissionSettingsDTO'
import type { IGetAdmissionSettingsResponseDTO } from '../DTO/GetAdmissionSettingsDTO'
import { ADMISSION_SETTINGS_QUERY_KEY } from './useAdmissionSettingsQuery'

export function useSaveAdmissionSettingsMutation() {
  const queryClient = useQueryClient()

  return useMutation<
    ISaveAdmissionSettingsResponseDTO,
    Error,
    ISaveAdmissionSettingsRequestDTO
  >({
    mutationFn: (payload) => saveAdmissionSettingsServerAction(payload),
    onSuccess: (data) => {
      if (data.ok) {
        queryClient.setQueryData<IGetAdmissionSettingsResponseDTO>(
          ADMISSION_SETTINGS_QUERY_KEY,
          {
            items: data.items,
          }
        )
      }
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ADMISSION_SETTINGS_QUERY_KEY })
    },
  })
}
