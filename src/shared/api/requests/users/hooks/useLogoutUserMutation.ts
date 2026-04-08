import { useMutation, useQueryClient } from '@tanstack/react-query'

import { logoutUserServerAction } from '../server-actions/logoutUserServerAction'
import type { ILogoutUserResponseDTO } from '../DTO/LogoutUserDTO'

const SESSION_QUERY_KEY = ['users', 'session'] as const

export function useLogoutUserMutation() {
  const queryClient = useQueryClient()

  return useMutation<ILogoutUserResponseDTO, Error, void>({
    mutationFn: () => logoutUserServerAction(),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: SESSION_QUERY_KEY })
    },
  })
}
