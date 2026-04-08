import { LoadingButton } from '@UI/LoadingButton'
import { ModalComponent } from '@UI/ModalComponent'
import { useLoginUserMutation } from '@/shared/api/requests/users'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ILoginButton {
    loginRef: React.RefObject<HTMLInputElement>
    passRef: React.RefObject<HTMLInputElement>
}

export const SubmitBtn: React.FC<ILoginButton> = ({ loginRef, passRef }) => {
    const router = useRouter()
    const loginMutation = useLoginUserMutation()
    const [error, setError] = useState(false)

    const [modal, setModal] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        setModal(document.getElementById('modal_block') as HTMLDivElement)
    }, [])

    useEffect(() => {
        if (!error) return
        const timer = setTimeout(() => setError(false), 5000)
        return () => clearTimeout(timer)
    }, [error])

    const handleSubmit = async () => {
        setError(false)
        const login = loginRef?.current?.value?.trim() ?? ''
        const password = passRef?.current?.value ?? ''
        if (!login || !password) {
            setError(true)
            return
        }

        try {
            const result = await loginMutation.mutateAsync({ login, password })
            if (result.error) {
                setError(true)
                return
            }
            router.push('/CMS')
        } catch {
            setError(true)
        }
    }

    return (
        <>
            <LoadingButton
                onClick={handleSubmit}
                loading={loginMutation.isPending}
                text="войти"
            />
            {modal &&
                createPortal(
                    <ModalComponent
                        text="Ошибка авторизации. Неправильный логин или пароль"
                        siverity="error"
                        isOpen={error}
                    />,
                    modal
                )}
        </>
    )
}
