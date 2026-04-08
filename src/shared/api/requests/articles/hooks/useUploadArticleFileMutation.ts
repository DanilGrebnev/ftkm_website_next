import { useMutation, useQueryClient } from '@tanstack/react-query'

import { uploadArticleFileServerAction } from '../server-actions/uploadArticleFileServerAction'
import type {
  IUploadArticleFileRequestDTO,
  IUploadArticleFileResponseDTO,
} from '../DTO/ArticleFileDTO'

export function useUploadArticleFileMutation(articleId: string) {
  const queryClient = useQueryClient()

  return useMutation<IUploadArticleFileResponseDTO, Error, FormData>({
    mutationFn: (formData) => uploadArticleFileServerAction(articleId, formData),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['articles', 'detail', articleId] })
    },
  })
}
