import { useInfiniteQuery } from '@tanstack/react-query'

import { getArticlesPageServerAction } from '../server-actions/getArticlesPageServerAction'
import type {
  IGetArticlesPageResponseDTO,
  IGetArticlesPageRequestDTO,
} from '../DTO/GetArticlesPageDTO'
import type { IArticleDTO } from '../DTO/ArticleDTO'

const DEFAULT_LIMIT = 8

export function useGetArticlesPageQuery(initialParams: IGetArticlesPageRequestDTO) {
  const baseLimit = initialParams.limit ?? DEFAULT_LIMIT

  return useInfiniteQuery<IGetArticlesPageResponseDTO, Error, IArticleDTO[]>({
    queryKey: ['articles', 'list', initialParams],
    queryFn: ({ pageParam }) =>
      getArticlesPageServerAction({
        ...initialParams,
        ...(pageParam ?? {}),
      }),
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce(
        (sum, page) => sum + page.data.length,
        0
      )
      if (totalLoaded >= lastPage.totalCount) {
        return undefined
      }
      return {
        skip: totalLoaded,
        limit: baseLimit,
      }
    },
    select: ({ pages }) => pages.flatMap((page) => page.data),
    initialPageParam: { skip: initialParams.skip ?? 0, limit: baseLimit },
  })
}
