'use client'

import { getLastNews } from '@/entities/article/model/server_actions/news'
import { useGetWindowWidth } from '@hooks/useGetWindowWidth'
import { useShowIfIsView } from '@hooks/useShowIfIsView'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'

import { LazyAccordion } from './Accordion/LazyAccordion'
import { ButtonArchive } from './ButtonArchive'
import { LazyNewsList } from './NewsList/LazyNewsList'
import s from './style.module.scss'
import { globalVariables } from '@globalVariables'
import { INewsItem } from '@/entities/article/model/server_actions/types/News'

export const NewsBlock = () => {
    const [lastNews, setLastNews] = useState<INewsItem[]>([])
    const { ref, active } = useShowIfIsView({ threshold: 0.3 })
    const { currentWidth } = useGetWindowWidth()

    useEffect(() => {
        if (!active) return
        getLastNews(globalVariables.limit).then((result) => {
            setLastNews(result.data as any)
        })
    }, [active])

    return (
        <Container
            id='News-Block'
            className={s.wrapper}
            maxWidth='xl'
            ref={ref}
        >
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
