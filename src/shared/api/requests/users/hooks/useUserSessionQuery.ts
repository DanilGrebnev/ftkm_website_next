import { useQuery } from '@tanstack/react-query'

import { getSessionServerAction } from '../server-actions/getSessionServerAction'
import type { IGetSessionResponseDTO } from '../DTO/SessionUserDTO'

const SESSION_QUERY_KEY = ['users', 'session'] as const

export function useUserSessionQuery() {
  return useQuery<IGetSessionResponseDTO | null>({
    queryKey: SESSION_QUERY_KEY,
    queryFn: () => getSessionServerAction(),
    staleTime: 1000 * 30,
    gcTime: 1000 * 60 * 5,
  })
}
