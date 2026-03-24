import { LoadingButton } from '@UI/LoadingButton'
import { ModalComponent } from '@UI/ModalComponent'
import { useFetchLogin } from '@/entities/auth/model/hooks/useFetchLogin'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ILoginButton {
    loginRef: React.RefObject<HTMLInputElement>
    passRef: React.RefObject<HTMLInputElement>
}

export const SubmitBtn: React.FC<ILoginButton> = ({ loginRef, passRef }) => {
    const { fetchLogin, isLoading, error } = useFetchLogin()

    const [modal, setModal] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        setModal(document.getElementById('modal_block') as HTMLDivElement)
    }, [])

    return (
        <>
            <LoadingButton
                onClick={() =>
                    fetchLogin({
                        login: loginRef?.current?.value as string,
                        password: passRef?.current?.value as string,
                    })
                }
                loading={isLoading}
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
