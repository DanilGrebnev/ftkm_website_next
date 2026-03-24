import { TextField } from '@mui/material'
import { forwardRef } from 'react'

import s from '../style.module.scss'

export const PasswordInput = forwardRef((_, ref) => {
    return (
        <TextField
            inputRef={ref}
            className={s.TextField}
            id="outlined-password-input"
            label="Пароль"
            type="password"
        />
    )
})
