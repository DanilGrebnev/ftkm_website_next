'use client'

import { LoadingCircle } from '@/shared/ui/LoadingCircle'
import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import clsx from 'clsx'
import { type FC } from 'react'

import { FileItem } from './FileItem/FileItem'
import s from './FileList.module.scss'

interface IFileListProps {
    className?: string
}

export const FileList: FC<IFileListProps> = (props) => {
    const { className } = props
    const fileLoading = useNewsEditorStore((s) => s.loadingFile)
    const fileList = useNewsEditorStore((s) => s.files)

    if (fileLoading) {
        return <LoadingCircle style={{ justifyContent: 'flex-start' }} />
    }

    return (
        <ul className={clsx(s.FileList, className)}>
            {fileList?.map((file) => {
                return (
                    <FileItem
                        key={file.name}
                        {...file}
                    />
                )
            })}
        </ul>
    )
}

FileList.displayName = 'FileList'
