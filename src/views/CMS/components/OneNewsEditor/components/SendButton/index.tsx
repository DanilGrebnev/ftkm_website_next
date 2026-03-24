'use client'

import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { LoadingButton } from '@UI/LoadingButton'
import { useSendNews } from '@/entities/article/model/hooks/useSendNews'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const SendButton = () => {
    const params = useParams()
    const _id = params?._id as string | undefined

    const title = useNewsEditorStore((s) => s.title)
    const body = useNewsEditorStore((s) => s.body)
    const video = useNewsEditorStore((s) => s.video)
    const files = useNewsEditorStore((s) => s.files)
    const fetchNews = useNewsEditorStore((s) => s.fetchNews)

    const [disabled, setDisabled] = useState(false)

    const { postNews, editNews } = useSendNews()

    const newsFields = { title, body, video, files }

    const onClick = _id
        ? () => editNews({ body: newsFields, _id })
        : () => postNews(newsFields)

    useEffect(() => {
        setDisabled(!body || !title)
    }, [body, title])

    return (
        <LoadingButton
            onClick={() => {
                setDisabled(true)
                onClick()
                setTimeout(setDisabled, 3000, false)
            }}
            loading={fetchNews}
            text={_id ? 'Изменить' : 'Отправить'}
            disabled={disabled}
        />
    )
}
