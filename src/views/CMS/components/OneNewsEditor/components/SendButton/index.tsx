'use client'

import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import {
    useCreateArticleMutation,
    useUpdateArticleMutation,
} from '@/shared/api/requests/articles'
import { API_RESPONSES } from '@API_RESPONSES'
import { LoadingButton } from '@UI/LoadingButton'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const SendButton = () => {
    const params = useParams()
    const _id = params?._id as string | undefined
    const router = useRouter()

    const title = useNewsEditorStore((s) => s.title)
    const body = useNewsEditorStore((s) => s.body)
    const video = useNewsEditorStore((s) => s.video)
    const fetchNews = useNewsEditorStore((s) => s.fetchNews)
    const setFetchNews = useNewsEditorStore((s) => s.setFetchNews)
    const showModal = useNewsEditorStore((s) => s.showModal)
    const closeModal = useNewsEditorStore((s) => s.closeModal)
    const clearFields = useNewsEditorStore((s) => s.clearFields)

    const [disabled, setDisabled] = useState(false)

    const createMutation = useCreateArticleMutation()
    const updateMutation = useUpdateArticleMutation()

    const handleSubmit = async () => {
        setFetchNews(true)
        try {
            if (_id) {
                await updateMutation.mutateAsync({
                    id: _id,
                    title,
                    body,
                    video,
                })
                showModal(API_RESPONSES.NEWS_EDIT_OK)
            } else {
                await createMutation.mutateAsync({
                    title,
                    body,
                    video,
                })
                showModal(API_RESPONSES.NEWS_SEND_OK)
                clearFields()
            }

            setTimeout(() => {
                closeModal()
                router.push('/CMS')
            }, 3000)
        } catch (error) {
            console.error('Ошибка отправки новости', error)
            showModal(_id ? API_RESPONSES.NEWS_EDIT_ERROR : API_RESPONSES.NEWS_SEND_ERROR)
            setTimeout(() => {
                closeModal()
            }, 3000)
        } finally {
            setFetchNews(false)
        }
    }

    useEffect(() => {
        setDisabled(!body || !title)
    }, [body, title])

    return (
        <LoadingButton
            onClick={() => {
                setDisabled(true)
                void handleSubmit()
                setTimeout(setDisabled, 3000, false)
            }}
            loading={fetchNews}
            text={_id ? 'Изменить' : 'Создать'}
            disabled={disabled}
        />
    )
}
