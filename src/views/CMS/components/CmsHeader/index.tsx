'use client'

import { logout } from '@/entities/auth/model/server_actions/auth'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import s from './CmsHeader.module.scss'

export const CmsHeader = () => {
    const router = useRouter()

    const handleLogout = useCallback(async () => {
        await logout()
        router.refresh()
        router.push('/login')
    }, [router])

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
                <Button
                    type='button'
                    variant='outlined'
                    color='secondary'
                    className={s.logoutBtn}
                    onClick={handleLogout}
                >
                    Выйти
                </Button>
            </div>
        </header>
    )
}
