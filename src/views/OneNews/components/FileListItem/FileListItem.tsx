/* eslint-disable jsx-a11y/anchor-has-content */
import { INewsFiles } from '@/entities/article/api/types/News'
import { createHrefToFile } from '@/shared/utils/createHrefToFile'
import { sliceExtensionInString } from '@/shared/utils/sliceExtensionString'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import { Button } from '@mui/material'
import { type FC, useRef } from 'react'

import { FileIcon } from '../FileIcon/FileIcon'
import s from './FileListItem.module.scss'

interface IFileListItemProps extends INewsFiles {}

export const FileListItem: FC<IFileListItemProps> = (props) => {
    const { extension, name } = props
    const linkRef = useRef<HTMLAnchorElement>(null)

    const clickToLink = () => {
        if (!linkRef.current) return
        linkRef.current.click()
    }

    return (
        <li
            key={name}
            className={s['file-list-item']}
        >
            <div className={s['file-list-item__content']}>
                <FileIcon
                    alt={name}
                    extension={extension}
                />
                <div className={s['file-list-item__name']}>
                    {sliceExtensionInString(name)}
                </div>
                <a
                    ref={linkRef}
                    download={name}
                    target='_blank'
                    href={createHrefToFile(name)}
                    rel='noreferrer'
                    className={s['download-file-link']}
                ></a>
            </div>

            <Button
                onClick={clickToLink}
                variant='text'
                type='button'
                className={s['download-container']}
            >
                <DownloadRoundedIcon className={s['download-icon']} />
                <span className={s['downlad-text']}>скачать {name}</span>
            </Button>
        </li>
    )
}

FileListItem.displayName = 'FileListItem'
