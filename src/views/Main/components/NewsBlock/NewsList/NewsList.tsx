'use client'

import { INewsItem } from '@/entities/article/api/types/News'
import { FC } from 'react'
import { m } from 'framer-motion'
import { NewsItem } from './NewsItem'

interface INewsList {
    className?: string
    lastNews?: INewsItem[]
}

const NewsList: FC<INewsList> = (props) => {
    const { className, lastNews = [] } = props

    return (
        <m.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {Array.isArray(lastNews) && lastNews.map((data, i) => {
                return <NewsItem key={data._id || i} {...data} />
            })}
        </m.div>
    )
}

export default NewsList
