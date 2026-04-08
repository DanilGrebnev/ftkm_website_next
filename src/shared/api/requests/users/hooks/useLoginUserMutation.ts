import { useMutation, useQueryClient } from '@tanstack/react-query'

import { loginUserServerAction } from '../server-actions/loginUserServerAction'
import type {
  ILoginUserRequestDTO,
  ILoginUserResponseDTO,
} from '../DTO/LoginUserDTO'
import type { IGetSessionResponseDTO } from '../DTO/SessionUserDTO'

const SESSION_QUERY_KEY = ['users', 'session'] as const

export function useLoginUserMutation() {
  const queryClient = useQueryClient()

  return useMutation<ILoginUserResponseDTO, Error, ILoginUserRequestDTO>({
    mutationFn: ({ login, password }) => loginUserServerAction(login, password),
    onSuccess: (data, variables) => {
      if (!data.error) {
        queryClient.setQueryData<IGetSessionResponseDTO>(SESSION_QUERY_KEY, {
          login: variables.login,
        })
      }
      void queryClient.invalidateQueries({ queryKey: SESSION_QUERY_KEY })
    },
  })
}
