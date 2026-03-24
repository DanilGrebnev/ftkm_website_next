import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp'
import { IconButton, Tooltip } from '@mui/material'

export const EditToolTip = () => {
    return (
        <Tooltip title="Редактировать">
            <IconButton>
                <ModeEditOutlineSharpIcon sx={{ color: 'black' }} />
            </IconButton>
        </Tooltip>
    )
}
