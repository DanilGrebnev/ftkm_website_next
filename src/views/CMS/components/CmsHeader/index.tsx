'use client'

import { Button } from '@mui/material'
import Link from 'next/link'

import s from './CmsHeader.module.scss'

export const CmsHeader = () => {
    return (
        <header className={s.bar}>
            <div className={s.left}>
                <Button
                    type='button'
                    className={s.btn}
                >
                    <Link href='/CMS'>Новости</Link>
                </Button>
                <Button
                    type='button'
                    className={s.btn}
                >
                    <Link href='/CMS/admission'>Поступление</Link>
                </Button>
            </div>
            <div className={s.right}>
                <Button
                    type='button'
                    className={s.btn}
                >
                    <Link href='/'>На главную</Link>
                </Button>
            </div>
        </header>
    )
}
