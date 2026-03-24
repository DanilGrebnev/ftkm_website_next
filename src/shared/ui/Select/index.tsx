import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import SelectMUI, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'

interface ISelect {
    onChange: (e: SelectChangeEvent) => void
    value: string
    style?: {
        [key: string]: string
    }

    children?: { value: number; innerText: string }[]
    InputLabel?: string
}

export const Select = React.memo((props: ISelect) => {
    return (
        <Box sx={props.style}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.InputLabel || 'Test'}</InputLabel>
                <SelectMUI value={props.value} label="Age" onChange={props.onChange}>
                    {props?.children?.map(({ value, innerText }) => {
                        return (
                            <MenuItem key={value} value={value}>
                                {innerText}
                            </MenuItem>
                        )
                    })}
                </SelectMUI>
            </FormControl>
        </Box>
    )
})
