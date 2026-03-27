'use client'

import { formatNewsCreatedDate } from '@/entities/article/lib/formatNewsCreatedDate'
import { type INewsItem } from '@/entities/article/model/server_actions/types/News'
import { TextareaView } from '@/shared/ui/ArticleBodyPreview/ArticleBodyPreview'
import { selectFileExtensionIcon } from '@/shared/utils/selectFileExtensionIcon'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { memo } from 'react'

import s from './style.module.scss'

export const NewsCardItem: React.FC<INewsItem> = memo(
    ({ title, body, createdDate, files, _id }) => {
        const router = useRouter()

        const onClick = () => {
            router.push(`/news/${_id}`)
        }

        return (
            <div
                onClick={onClick}
                className={s.cardContainer}
            >
                <div className={s.wrapper}>
                    <p className={s.title}>{title}</p>
                    <p className={s.date}>{formatNewsCreatedDate(createdDate)}</p>
                    <div
                        className={clsx(s.files, {
                            [s.hidden]: !files?.length,
                        })}
                    >
                        {files?.map((file, i) => {
                            if (i < 7) {
                                return (
                                    <img
                                        key={file.name}
                                        alt={file.name}
                                        src={selectFileExtensionIcon(
                                            file.extension
                                        )}
                                    />
                                )
                            } else return null
                        })}
                    </div>
                    <TextareaView className={s.body}>{body}</TextareaView>
                </div>
            </div>
        )
    }
)

NewsCardItem.displayName = 'NewsCardItem'
