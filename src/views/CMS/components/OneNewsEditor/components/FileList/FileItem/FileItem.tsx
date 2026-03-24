'use client'

import { INewsFiles } from '@/entities/article/model/server_actions/types/News'
import { createHrefToFile } from '@/shared/utils/createHrefToFile'
import { selectFileExtensionIcon } from '@/shared/utils/selectFileExtensionIcon'
import { sliceExtensionInString } from '@/shared/utils/sliceExtensionString'
import { deleteNewsFile } from '@/entities/article/model/server_actions/files'
import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import dynamic from 'next/dynamic'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const AlertDialog = dynamic(
    () => import('@UI/AlertDialog').then(mod => ({ default: mod.AlertDialog })),
    { ssr: false }
)
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { Button } from '@mui/material'
import clsx from 'clsx'
import { type FC, memo, useState } from 'react'

import s from './FileItem.module.scss'

interface IFileItemProps extends INewsFiles {
    className?: string
}

export const FileItem: FC<IFileItemProps> = memo((props) => {
    const { className, name, newsId, extension } = props
    const [openModal, setOpenModal] = useState(false)
    const setFiles = useNewsEditorStore((s) => s.setFiles)
    const setLoadingFile = useNewsEditorStore((s) => s.setLoadingFile)

    const handleDeleteFile = async () => {
        setLoadingFile(true)
        try {
            const updatedFiles = await deleteNewsFile({ newsId, fileName: name })
            setFiles(updatedFiles as any)
        } catch {
            alert('Ошибка удаления файла')
        } finally {
            setLoadingFile(false)
        }
    }

    return (
        <>
            <li className={clsx(s.FileItem, className)}>
                <img
                    className={s.icon}
                    alt={name}
                    loading='lazy'
                    src={selectFileExtensionIcon(extension)}
                />
                <p>{sliceExtensionInString(name)}</p>
                <Button size='small'>
                    <a
                        href={createHrefToFile(name)}
                        download={true}
                        target='_blank'
                        rel='noreferrer'
                        className={s['download-button']}
                    >
                        Загрузить
                        <FileDownloadOutlinedIcon
                            sx={{ color: 'green' }}
                            fontSize='small'
                        />
                    </a>
                </Button>
                <Button
                    onClick={() => setOpenModal(true)}
                    size='small'
                    className={s['delete-button']}
                >
                    удалить
                    <DeleteOutlineOutlinedIcon fontSize='medium' />
                </Button>
            </li>
            <AlertDialog
                onClickAction={handleDeleteFile}
                dialogTitle={`Удалить файл?`}
                dialogContent={name}
                open={openModal}
                handleClose={() => setOpenModal(false)}
            />
        </>
    )
})

FileItem.displayName = 'FileItem'
