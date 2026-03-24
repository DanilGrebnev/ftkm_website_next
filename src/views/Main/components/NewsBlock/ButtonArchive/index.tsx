'use client'

import Button from '@mui/material/Button'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { type FC, memo } from 'react'

import s from './s.module.scss'

interface IButtonArchiveProps {
    className?: string
}

export const ButtonArchive: FC<IButtonArchiveProps> = memo((props) => {
    const { className } = props
    const router = useRouter()

    return (
        <div className={clsx(s.ButtonArchive, className)}>
            <Button
                variant='text'
                className={s.button}
                onClick={() => router.push('/news')}
            >
                Архив новостей
            </Button>
        </div>
    )
})

ButtonArchive.displayName = 'ButtonArchive'
