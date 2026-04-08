'use client'

import { useEffect, useState } from 'react'

import {
    useGetLastArticlesQuery,
    type IArticleDTO,
} from '@/shared/api/requests/articles'
import { useGetWindowWidth } from '@hooks/useGetWindowWidth'
import { useShowIfIsView } from '@hooks/useShowIfIsView'
import Container from '@mui/material/Container'

import { LazyAccordion } from './Accordion/LazyAccordion'
import { ButtonArchive } from './ButtonArchive'
import { LazyNewsList } from './NewsList/LazyNewsList'
import s from './style.module.scss'

const MAIN_NEWS_PREVIEW_LIMIT = 8

export const NewsBlock = () => {
    const [lastNews, setLastNews] = useState<IArticleDTO[]>([])
    const { ref, active } = useShowIfIsView({ threshold: 0.3 })
    const { currentWidth } = useGetWindowWidth()
    const { data } = useGetLastArticlesQuery({ amount: MAIN_NEWS_PREVIEW_LIMIT })

    useEffect(() => {
        if (!active || !data) return
        setLastNews(data)
    }, [active, data])

    return (
        <Container
            id="News-Block"
            className={s.wrapper}
            maxWidth="xl"
            ref={ref}
            component="section"
        >
            <header className={s.header}>
                <h2 className={s.title}>
                    Последние{' '}
                    <span className={s.titleAccent}>новости</span>
                </h2>
                <p className={s.subtitle}>
                    События и публикации кафедры
                </p>
            </header>

            {!!lastNews.length && active && currentWidth >= 750 && (
                <LazyNewsList className={s['news-block-desktop']} lastNews={lastNews} />
            )}

            {!!lastNews.length && active && currentWidth <= 749 && (
                <LazyAccordion
                    newsListClassName={s['news-list-mobile']}
                    className={s['news-block-mobile']}
                    lastNews={lastNews}
                />
            )}

            {!!lastNews.length && <ButtonArchive />}
        </Container>
    )
}
