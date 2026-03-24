import { FC, memo } from 'react'
import Link from 'next/link'
import { INewsItem } from '@/entities/article/model/server_actions/types/News'

import s from './s.module.scss'

export const NewsItem: FC<INewsItem> = memo((props) => {
    const { _id, title, createdDate } = props

    return (
        <Link
            className={s['news-wrapper']}
            href={`/news/${_id}`}
        >
            <p className={s.date}>{createdDate}</p>
            <h3 className={s.title}>{title}</h3>
        </Link>
    )
})
