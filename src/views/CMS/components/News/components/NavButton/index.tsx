import { Button } from '@mui/material'
import Link from 'next/link'

import s from './s.module.scss'

export const NavButton = () => {
    return (
        <div className={s.container}>
            <Button
                type='button'
                className={s.btn}
            >
                <Link href='/CMS/admission'>Поступление</Link>
            </Button>
            <Button
                type='button'
                className={s.btn}
            >
                <Link href={'/'}>На главную</Link>
            </Button>
        </div>
    )
}
