import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

import { type ICircle } from './interface'
import s from './s.module.scss'

export const LoadingCircle: React.FC<ICircle> = ({
    style,
    circularSize,
    fullScreen,
}) => {
    const component = (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...style,
            }}
        >
            <CircularProgress size={circularSize} />
        </Box>
    )

    return !fullScreen ? component : <div className={s.circle}>{component}</div>
}
