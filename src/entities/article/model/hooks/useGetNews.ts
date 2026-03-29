import { getNewsPage } from '@/entities/article/api/actions/news'
import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'
import { globalVariables } from '@globalVariables'

export const useGetNews = () => {
    const skip = useNewsListStore((s) => s.skip)
    const appendNews = useNewsListStore((s) => s.appendNews)
    const setLoading = useNewsListStore((s) => s.setLoading)
    const incrementSkip = useNewsListStore((s) => s.incrementSkip)

    const limit = globalVariables.limit

    const getNews = async (args?: { defaultSkip?: number }) => {
        const currentSkip = args?.defaultSkip ?? skip
        setLoading(true)
        try {
            const result = await getNewsPage({ skip: currentSkip, limit })
            appendNews(result.data as any, result.totalCount)
            incrementSkip(limit)
        } catch (err) {
            console.error('Error fetching news:', err)
        } finally {
            setLoading(false)
        }
    }

    return { getNews }
}
