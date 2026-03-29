import { formatNewsCreatedDate } from '@/entities/article/model/utils/formatNewsCreatedDate'
import { INewsItem } from '@/entities/article/api/types/News'
import Link from 'next/link'
import { FC, memo } from 'react'

import s from './s.module.scss'

export const NewsItem: FC<INewsItem> = memo((props) => {
    const { _id, title, createdDate } = props

    return (
        <Link
            className={s['news-wrapper']}
            href={`/news/${_id}`}
        >
            <p className={s.date}>{formatNewsCreatedDate(createdDate)}</p>
            <h3 className={s.title}>{title}</h3>
        </Link>
    )
})
