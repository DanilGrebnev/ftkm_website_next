'use client'

import { useLogoutUserMutation } from '@/shared/api/requests/users'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import s from './CmsHeader.module.scss'

export const CmsHeader = () => {
    const router = useRouter()
    const logoutMutation = useLogoutUserMutation()

    const handleLogout = useCallback(async () => {
        try {
            await logoutMutation.mutateAsync()
        } finally {
            router.refresh()
            router.push('/login')
        }
    }, [logoutMutation, router])

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
