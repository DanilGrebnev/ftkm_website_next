import { Alert, Collapse, Stack } from '@mui/material'

interface props {
    isOpen: boolean
    text: string
    siverity: 'error' | 'warning' | 'info' | 'success'
}

export const ModalComponent: React.FC<props> = ({ isOpen, text, siverity }) => {
    return (
        <Collapse in={isOpen}>
            <Stack sx={{ width: '100%' }}>
                <Alert severity={siverity}>{text}</Alert>
            </Stack>
        </Collapse>
    )
}
