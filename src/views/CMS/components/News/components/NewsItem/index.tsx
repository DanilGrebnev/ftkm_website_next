import { useOpenModal } from '@hooks/useOpenModal'
import {
    useDeleteArticleMutation,
    type IArticleDTO,
} from '@/shared/api/requests/articles'
import { FC, useCallback } from 'react'

import s from './NewsItem.module.scss'
import { AlertDeleteDialog } from './components/AlertDeleteDialog'
import { DateBlock } from './components/DateBlock'
import { DeleteBtn } from './components/DeleteBtn'
import { EditBtn } from './components/EditBtn'
import { FileList } from './components/FileList/FileList'

export const NewsItem: FC<IArticleDTO> = ({
    _id,
    createdDate,
    title,
    files,
}) => {
    const { open, toggleModal } = useOpenModal()
    const deleteMutation = useDeleteArticleMutation()

    const handleDelete = useCallback(async () => {
        try {
            await deleteMutation.mutateAsync({ id: _id })
        } catch (error) {
            console.error('Ошибка удаления новости', error)
        }
    }, [_id, deleteMutation])

    return (
        <div className={s.newsItem}>
            <h1>{title}</h1>
            <DateBlock createdDate={createdDate} />

            {!!files.length && <FileList files={files} />}
            <div className={s.btnGroup}>
                <EditBtn id={_id} />
                <DeleteBtn
                    isLoading={deleteMutation.isPending}
                    onClick={toggleModal}
                />
                <AlertDeleteDialog
                    isLoading={deleteMutation.isPending}
                    onConfirm={handleDelete}
                    closeModal={toggleModal}
                    open={open}
                />
            </div>
        </div>
    )
}
