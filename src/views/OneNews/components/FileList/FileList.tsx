/* eslint-disable jsx-a11y/anchor-has-content */
import { INewsFiles } from '@/entities/article/model/server_actions/types/News'
import clsx from 'clsx'
import { type FC } from 'react'

import { FileListItem } from '../FileListItem/FileListItem'
import s from './FileList.module.scss'

interface IFileListProps {
    className?: string
    fileList?: INewsFiles[]
}

export const FileList: FC<IFileListProps> = (props) => {
    const { className, fileList } = props

    if (!fileList?.length) return null

    return (
        <div className={clsx(s.FileList, className)}>
            <h3>Прикреплённые файлы</h3>
            <ol className={s['file-list-conteiner']}>
                {fileList?.map((file) => {
                    return (
                        <FileListItem
                            key={file.name}
                            {...file}
                        />
                    )
                })}
            </ol>
        </div>
    )
}

FileList.displayName = 'FileList'
