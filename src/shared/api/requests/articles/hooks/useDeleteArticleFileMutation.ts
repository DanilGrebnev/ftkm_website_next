import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteArticleFileServerAction } from '../server-actions/deleteArticleFileServerAction'
import type {
  IDeleteArticleFileRequestDTO,
  IDeleteArticleFileResponseDTO,
} from '../DTO/ArticleFileDTO'

export function useDeleteArticleFileMutation(articleId: string) {
  const queryClient = useQueryClient()

  return useMutation<IDeleteArticleFileResponseDTO, Error, IDeleteArticleFileRequestDTO>({
    mutationFn: (payload) => deleteArticleFileServerAction(payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['articles', 'detail', articleId] })
    },
  })
}
