import { useInfiniteQuery } from '@tanstack/react-query'
import { newsApiKeys } from './newsApiKeys'
import { getNewsPage } from '@/entities/article/model/server_actions/news'
import { globalVariables } from '@globalVariables'

export const useGetNewsQuery = () => {
    return useInfiniteQuery({
        queryKey: [newsApiKeys.getNews],
        queryFn: ({ pageParam }) => getNewsPage(pageParam),
        getNextPageParam: (_, __, { skip }) => ({
            skip: skip + globalVariables.limit,
            limit: globalVariables.limit,
        }),
        select: ({ pages }) => pages.map((page) => page.data).flat(),
        initialPageParam: { skip: 0, limit: globalVariables.limit },
    })
}
