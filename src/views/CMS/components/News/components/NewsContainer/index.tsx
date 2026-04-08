'use client'

import { ErrorBoundary } from '@/app/Providers'
import { type IArticleDTO } from '@/shared/api/requests/articles'
import { type FC } from 'react'

import { NewsItem } from '../NewsItem'
import s from './s.module.scss'

interface NewsContainerProps {
    articles: IArticleDTO[]
    isLoading: boolean
}

export const NewsContainer: FC<NewsContainerProps> = ({
    articles,
    isLoading,
}) => {
    const showSkeleton = isLoading && !articles.length

    return (
        <section className={s.newsContainer}>
            {showSkeleton ? (
                <div className={s.placeholder}>Загрузка новостей...</div>
            ) : articles.length === 0 ? (
                <div className={s.placeholder}>Новости отсутствуют</div>
            ) : (
                articles.map((item) => (
                    <ErrorBoundary key={item._id}>
                        <NewsItem {...item} />
                    </ErrorBoundary>
                ))
            )}
        </section>
    )
}
