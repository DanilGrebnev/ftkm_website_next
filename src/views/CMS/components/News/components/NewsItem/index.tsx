import { useOpenModal } from '@hooks/useOpenModal'
import { INewsItem } from '@/entities/article/model/server_actions/types/News'
import { FC } from 'react'

import s from './NewsItem.module.scss'
import { AlertDeleteDialog } from './components/AlertDeleteDialog'
import { DateBlock } from './components/DateBlock'
import { DeleteBtn } from './components/DeleteBtn'
import { EditBtn } from './components/EditBtn'
import { FileList } from './components/FileList/FileList'

export const NewsItem: FC<INewsItem> = ({
    _id,
    createdDate,
    title,
    isDeleteLoading,
    files,
}) => {
    const { open, toggleModal } = useOpenModal()

    return (
        <div className={s.newsItem}>
            <h1>{title}</h1>
            <DateBlock createdDate={createdDate} />

            {!!files.length && <FileList files={files} />}
            <div className={s.btnGroup}>
                <EditBtn id={_id} />
                <DeleteBtn
                    isLoading={isDeleteLoading}
                    onClick={toggleModal}
                />
                <AlertDeleteDialog
                    id={_id}
                    closeModal={toggleModal}
                    open={open}
                />
            </div>
        </div>
    )
}
