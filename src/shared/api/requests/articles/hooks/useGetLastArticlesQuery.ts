import { useQuery } from '@tanstack/react-query'

import { getLastArticlesServerAction } from '../server-actions/getArticlesPageServerAction'
import type {
  IGetLastArticlesRequestDTO,
  IGetLastArticlesResponseDTO,
} from '../DTO/GetLastArticlesDTO'
import type { IArticleDTO } from '../DTO/ArticleDTO'

export function useGetLastArticlesQuery(params: IGetLastArticlesRequestDTO = {}) {
  const amount = params.amount ?? 3

  return useQuery<IArticleDTO[]>({
    queryKey: ['articles', 'last', amount],
    queryFn: async () => {
      const response =
        await getLastArticlesServerAction(amount)
      return response.data
    },
  })
}
