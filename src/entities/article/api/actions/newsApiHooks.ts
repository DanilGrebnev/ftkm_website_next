import { useInfiniteQuery } from '@tanstack/react-query'
import { newsApiKeys } from './newsApiKeys'
import { getNewsPage } from '@/entities/article/api/actions/news'
import { globalVariables } from '@globalVariables'

export const useGetNewsQuery = () => {
    const limit = globalVariables.limit

    return useInfiniteQuery({
        queryKey: [newsApiKeys.getNews],
        queryFn: ({ pageParam }) => getNewsPage(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const totalLoaded = allPages.reduce(
                (sum, page) => sum + page.data.length,
                0
            )
            if (totalLoaded >= lastPage.totalCount) {
                return undefined
            }
            return { skip: totalLoaded, limit }
        },
        select: ({ pages }) => pages.map((page) => page.data).flat(),
        initialPageParam: { skip: 0, limit },
    })
}
