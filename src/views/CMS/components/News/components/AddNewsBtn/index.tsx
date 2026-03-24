import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Tooltip } from '@mui/material'
import Link from 'next/link'
import { memo } from 'react'

import s from './s.module.scss'

export const AddNewsBtn = memo(() => {
    return (
        <Link
            className={s.addBtn}
            href={'/CMS/newsEditor'}
        >
            <Tooltip title='Добавить статью'>
                <AddCircleIcon
                    sx={{ cursor: 'pointer' }}
                    color='info'
                    fontSize='large'
                />
            </Tooltip>
        </Link>
    )
})
