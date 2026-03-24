'use client'

import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { TextField } from '@mui/material'
import { ChangeEvent, memo } from 'react'

export const BodyInput = memo(() => {
    const newsFieldBody = useNewsEditorStore((s) => s.body)
    const setField = useNewsEditorStore((s) => s.setField)

    return (
        <TextField
            autoComplete='off'
            error={!newsFieldBody}
            value={newsFieldBody}
            name='body'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setField('body', e.target.value)
            }
            sx={{ maxWidth: '1000px' }}
            label='Новость'
            helperText={!newsFieldBody && 'Поле не может быть пустым'}
            multiline
            maxRows={15}
        />
    )
})

BodyInput.displayName = 'BodyInput'
