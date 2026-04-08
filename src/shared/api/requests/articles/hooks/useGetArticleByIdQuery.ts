import { useQuery } from '@tanstack/react-query'

import { getArticleByIdServerAction } from '../server-actions/getArticleByIdServerAction'
import type {
  IGetArticleByIdRequestDTO,
  IGetArticleByIdResponseDTO,
} from '../DTO/GetArticleByIdDTO'
import type { IArticleDTO } from '../DTO/ArticleDTO'

export function useGetArticleByIdQuery(id: IGetArticleByIdRequestDTO['id']) {
  return useQuery<IArticleDTO | null>({
    queryKey: ['articles', 'detail', id],
    queryFn: async () => {
      const response: IGetArticleByIdResponseDTO = await getArticleByIdServerAction(id)
      return response.article
    },
    enabled: Boolean(id),
  })
}
