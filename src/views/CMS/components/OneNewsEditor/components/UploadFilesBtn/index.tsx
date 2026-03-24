import { LoadingButton } from '@mui/lab'
import React, { useRef } from 'react'

import s from './s.module.scss'

export const UploadFilesBtn: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)

    const onClick = () => {
        ref?.current?.click()
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const FileList = e?.target.files
    }

    return (
        <div>
            <LoadingButton
                onClick={onClick}
                children='Загрузить файлы'
            />
            <input
                onChange={onChange}
                className={s.input}
                type='file'
                multiple
                ref={ref}
            />
        </div>
    )
}
