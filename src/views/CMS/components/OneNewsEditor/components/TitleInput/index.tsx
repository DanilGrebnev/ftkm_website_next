'use client'

import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { TextField } from '@mui/material'
import { ChangeEvent, memo } from 'react'

export const TitleInput = memo(() => {
    const titleValue = useNewsEditorStore((s) => s.title)
    const setField = useNewsEditorStore((s) => s.setField)

    return (
        <TextField
            autoComplete='off'
            error={!titleValue}
            value={titleValue}
            name='title'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setField('title', e.target.value)
            }
            sx={{ maxWidth: '1000px' }}
            label='Заголовок новости'
            helperText={!titleValue && 'Поле не может быть пустым'}
        />
    )
})

TitleInput.displayName = 'TitleInput'
