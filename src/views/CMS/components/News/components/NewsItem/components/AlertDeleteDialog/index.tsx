'use client'

import dynamic from 'next/dynamic'
import { deleteNews } from '@/entities/article/api/actions/news'
import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'
import { useGetNews } from '@/entities/article/model/hooks/useGetNews'

const AlertDialog = dynamic(
    () => import('@UI/AlertDialog').then(mod => ({ default: mod.AlertDialog })),
    { ssr: false }
)

interface props {
    open: boolean
    closeModal: () => void
    id: string
}

export const AlertDeleteDialog: React.FC<props> = ({
    open,
    closeModal,
    id,
}) => {
    const toggleDeleteLoading = useNewsListStore((s) => s.toggleDeleteLoading)
    const clearList = useNewsListStore((s) => s.clearList)
    const { getNews } = useGetNews()

    const onClickAction = async (id: string) => {
        toggleDeleteLoading(id)

        try {
            await deleteNews(id)
            clearList()
            getNews({ defaultSkip: 0 })
        } catch {
            toggleDeleteLoading(id)
        }
    }

    return (
        <AlertDialog
            open={open}
            handleClose={closeModal}
            dialogTitle='Удалить новость?'
            onClickAction={() => onClickAction(id)}
        />
    )
}
