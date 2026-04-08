import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateArticleServerAction } from '../server-actions/updateArticleServerAction'
import type {
  IUpdateArticleRequestDTO,
  IUpdateArticleResponseDTO,
} from '../DTO/UpdateArticleDTO'

export function useUpdateArticleMutation() {
  const queryClient = useQueryClient()

  return useMutation<IUpdateArticleResponseDTO, Error, IUpdateArticleRequestDTO>({
    mutationFn: ({ id, ...payload }) =>
      updateArticleServerAction(id, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['articles'] })
    },
  })
}
