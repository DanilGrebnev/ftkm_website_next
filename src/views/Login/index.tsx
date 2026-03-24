'use client'

import { useIsAuth } from '@/entities/auth/model/hooks/useIsAuth'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRef } from 'react'

import { SubmitBtn } from './components/LoginButton'
import { LoginInput } from './components/LoginInput'
import { PasswordInput } from './components/PasswordInput'
import s from './style.module.scss'

const Login = () => {
    useIsAuth()

    const loginRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    return (
        <div className={s.LoginContainer}>
            <div className={s.InputContainer}>
                <h1>Система администрирования контента</h1>

                <LoginInput ref={loginRef} />

                <PasswordInput ref={passRef} />

                <div className={s.BtnGroup}>
                    <SubmitBtn
                        loginRef={loginRef}
                        passRef={passRef}
                    />
                    <Link href='/'>
                        <Button
                            variant='outlined'
                            className={s.btn}
                        >
                            На главную
                        </Button>
                    </Link>
                </div>
                <div id='modal_block'></div>
            </div>
        </div>
    )
}

export default Login
