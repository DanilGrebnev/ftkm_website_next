import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createArticleServerAction } from '../server-actions/createArticleServerAction'
import type {
  ICreateArticleRequestDTO,
  ICreateArticleResponseDTO,
} from '../DTO/CreateArticleDTO'

export function useCreateArticleMutation() {
  const queryClient = useQueryClient()

  return useMutation<ICreateArticleResponseDTO, Error, ICreateArticleRequestDTO>({
    mutationFn: (payload) => createArticleServerAction(payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['articles'] })
    },
  })
}
