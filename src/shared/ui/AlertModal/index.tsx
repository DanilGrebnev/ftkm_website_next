import { Alert, Collapse } from '@mui/material'
import { FC, memo } from 'react'

import { IAlertModal } from './interface'

export const AlertModal: FC<IAlertModal> = memo(
    ({ title, type, showModal }) => {
        return (
            <Collapse in={showModal}>
                <Alert severity={type}>{title}</Alert>
            </Collapse>
        )
    }
)
