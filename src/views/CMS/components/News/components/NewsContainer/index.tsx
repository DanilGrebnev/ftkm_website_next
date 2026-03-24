'use client'

import { ErrorBoundary } from '@/app/Providers'
import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'
import { useGetNews } from '@/entities/article/model/hooks/useGetNews'
import { useEffect } from 'react'

import { NewsItem } from '../NewsItem'
import s from './s.module.scss'

export const NewsContainer = () => {
    const news = useNewsListStore((s) => s.news)
    const { getNews } = useGetNews()

    const clearList = useNewsListStore((s) => s.clearList)

    useEffect(() => {
        clearList()
        getNews({ defaultSkip: 0 })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={s.newsContainer}>
            {news.map((item) => (
                <ErrorBoundary key={item._id}>
                    <NewsItem {...item} />
                </ErrorBoundary>
            ))}
        </section>
    )
}
