import { selectFileExtensionIcon } from '@/shared/utils/selectFileExtensionIcon'
import { type FC, useMemo } from 'react'

import s from './FileIcon.module.scss'

interface IFileIconProps {
    alt: string
    extension: string
}

export const FileIcon: FC<IFileIconProps> = (props) => {
    const { alt, extension } = props

    const icon = useMemo(() => selectFileExtensionIcon(extension), [extension])

    return (
        <img
            className={s.icon}
            alt={alt}
            loading='lazy'
            src={icon}
        />
    )
}

FileIcon.displayName = 'FileIcon'
