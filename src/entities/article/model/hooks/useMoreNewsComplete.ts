import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'
import React from 'react'

export const useMoreNewsComplete = () => {
    const [isCompleteMoreNews, setIsCompleteMoreNews] = React.useState(false)
    const news = useNewsListStore((s) => s.news)
    const documentsCount = useNewsListStore((s) => s.documentsCount)

    React.useEffect(() => {
        setIsCompleteMoreNews(news.length >= documentsCount)
    }, [news, documentsCount])

    return { isCompleteMoreNews }
}
