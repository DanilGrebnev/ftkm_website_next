import LoadingBtn from '@mui/lab/LoadingButton'
import React from 'react'
import s from './s.module.scss'
import { clsx } from 'clsx'
interface ILoadingButton {
    loading?: boolean
    onClick?: () => void
    text?: string
    disabled?: boolean
    size?: 'large' | 'medium' | 'small'
    className?: string
    sx?: React.CSSProperties
}

export const LoadingButton: React.FC<ILoadingButton> = ({
    loading,
    onClick,
    text,
    disabled,
    size,
    className,
}) => {
    return (
        <LoadingBtn
            className={clsx(s.LoadingBtn, className)}
            size={size}
            onClick={onClick}
            loading={loading}
            sx={loading ? { pointerEvents: 'none' } : {}}
            // endIcon={
            //     loading && <span style={{ width: '20px', height: '20px' }} />
            // }
            variant='text'
            disabled={disabled}
        >
            {text}
        </LoadingBtn>
    )
}
