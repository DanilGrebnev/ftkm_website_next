import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteArticleServerAction } from '../server-actions/deleteArticleServerAction'
import type {
  IDeleteArticleRequestDTO,
  IDeleteArticleResponseDTO,
} from '../DTO/DeleteArticleDTO'

export function useDeleteArticleMutation() {
  const queryClient = useQueryClient()

  return useMutation<IDeleteArticleResponseDTO, Error, IDeleteArticleRequestDTO>({
    mutationFn: ({ id }) => deleteArticleServerAction(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['articles'] })
    },
  })
}
