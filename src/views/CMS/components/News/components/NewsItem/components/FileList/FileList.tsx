import { INewsFiles } from '@/entities/article/model/server_actions/types/News'
import { selectFileExtensionIcon } from '@/shared/utils/selectFileExtensionIcon'
import clsx from 'clsx'
import { type FC } from 'react'

import s from './FileList.module.scss'

interface IFileListProps {
    className?: string
    files: INewsFiles[]
}

export const FileList: FC<IFileListProps> = (props) => {
    const { className, files } = props

    return (
        <div className={clsx(s.FileList, className)}>
            <h5 className={s.title}>Файлы:</h5>
            {files.map((file) => {
                return (
                    <img
                        key={file.name}
                        alt={file.name}
                        src={selectFileExtensionIcon(file.extension)}
                    />
                )
            })}
        </div>
    )
}

FileList.displayName = 'FileList'
