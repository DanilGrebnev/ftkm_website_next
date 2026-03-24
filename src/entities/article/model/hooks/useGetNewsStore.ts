import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'

export const useGetNewsStore = () => {
    const news = useNewsListStore((s) => s.news)
    const documentsCount = useNewsListStore((s) => s.documentsCount)
    const loading = useNewsListStore((s) => s.loading)
    const skip = useNewsListStore((s) => s.skip)
    const showNewsResponseModal = useNewsEditorStore((s) => s.showNewsResponseModal)
    const newsResponseModalContent = useNewsEditorStore((s) => s.newsResponseModalContent)
    const fetchNews = useNewsEditorStore((s) => s.fetchNews)

    return {
        news,
        documentsCount,
        loading,
        skip,
        showNewsResponseModal,
        newsResponseModalContent,
        fetchNews,
    }
}
