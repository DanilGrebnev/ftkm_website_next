'use client'

import { Button } from '@mui/material'
import Link from 'next/link'

import s from './s.module.scss'

export const NotFound = () => {
    return (
        <section
            className={s.wrapper}
            id='Not Found'
        >
            <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>404</h1>
            <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Страница не найдена</p>
            <Link href='/'>
                <Button className={s.btn}>Вернуться на главную</Button>
            </Link>
        </section>
    )
}

export default NotFound
