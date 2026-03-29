'use client'

import { createNews, updateNews } from '@/entities/article/api/actions/news'
import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'
import { IBody } from '@/entities/article/api/types/News'
import { API_RESPONSES } from '@API_RESPONSES'
import { useRouter } from 'next/navigation'

interface IEditNews {
    body: IBody
    _id: string
}

export const useSendNews = () => {
    const router = useRouter()
    const showModal = useNewsEditorStore((s) => s.showModal)
    const closeModalFn = useNewsEditorStore((s) => s.closeModal)
    const clearFields = useNewsEditorStore((s) => s.clearFields)
    const setFetchNews = useNewsEditorStore((s) => s.setFetchNews)
    const clearList = useNewsListStore((s) => s.clearList)

    const editNews = async ({ body, _id }: IEditNews) => {
        setFetchNews(true)
        try {
            await updateNews(_id, {
                title: body.title,
                body: body.body,
                video: body.video,
            })
            showModal(API_RESPONSES.NEWS_EDIT_OK)
            clearFields()
            clearList()
            setTimeout(() => {
                closeModalFn()
                router.push('/CMS')
            }, 3000)
        } catch {
            showModal(API_RESPONSES.NEWS_EDIT_ERROR)
            setTimeout(closeModalFn, 3000)
        } finally {
            setFetchNews(false)
        }
    }

    const postNews = async (body: IBody) => {
        setFetchNews(true)
        try {
            await createNews({
                title: body.title,
                body: body.body,
                video: body.video,
            })
            showModal(API_RESPONSES.NEWS_SEND_OK)
            clearFields()
            clearList()
            setTimeout(() => {
                closeModalFn()
                router.push('/CMS')
            }, 3000)
        } catch {
            showModal(API_RESPONSES.NEWS_SEND_ERROR)
            setTimeout(closeModalFn, 3000)
        } finally {
            setFetchNews(false)
        }
    }

    return { postNews, editNews }
}
