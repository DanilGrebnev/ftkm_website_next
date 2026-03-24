import { TextField } from '@mui/material'
import { forwardRef } from 'react'

import s from '../style.module.scss'

export const LoginInput = forwardRef((_, ref) => {
    return (
        <TextField
            inputRef={ref}
            // onChange={(e: any) => setValue(e.target.value)}
            className={s.TextField}
            label="Логин"
            variant="outlined"
        />
    )
})
