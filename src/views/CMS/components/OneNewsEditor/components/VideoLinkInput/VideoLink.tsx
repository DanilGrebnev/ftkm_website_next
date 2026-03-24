'use client'

import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { TextField } from '@mui/material'
import { ChangeEvent, memo } from 'react'

export const VideoLinkInput = memo(() => {
    const newsFieldVideo = useNewsEditorStore((s) => s.video)
    const setField = useNewsEditorStore((s) => s.setField)

    return (
        <TextField
            autoComplete='off'
            value={newsFieldVideo}
            name='video'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setField('video', e.target.value)
            }
            sx={{ maxWidth: '1000px' }}
            label='Ссылка на видео'
            helperText={'Не обязательно'}
        />
    )
})

VideoLinkInput.displayName = 'VideoLinkInput'
