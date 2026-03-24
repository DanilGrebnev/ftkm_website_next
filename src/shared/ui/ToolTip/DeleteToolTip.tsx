import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

interface IDeleteToolTip {
    onClick: () => void
}

export const DeleteToolTip: React.FC<IDeleteToolTip> = ({ onClick }) => {
    return (
        <Tooltip title="Удалить">
            <IconButton onClick={onClick}>
                <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
        </Tooltip>
    )
}
