'use client'

import { LineContainer } from '@components/LineContainer'
import { Container } from '@mui/material'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { SyntheticEvent } from 'react'

import { TStyle } from '@interfaces/Style'
import s from './style.module.scss'

interface IButtonAndContainer<T = string> {
    className: T
    buttonClassName?: T
    href: T
    text: T
    textUpperCase?: boolean
    style?: TStyle
}

export const ButtonAndContainer = ({
    className,
    href,
    text,
    textUpperCase,
    buttonClassName,
}: IButtonAndContainer) => {
    const router = useRouter()

    const navigateToMoreInfoPage = (e: SyntheticEvent) => {
        e.preventDefault()
        router.push('/contacts')
    }

    return (
        <Container
            component='section'
            className={clsx(className, s.ButtonAndContainer)}
            maxWidth='lg'
        >
            <LineContainer className={s.LineContainer}>
                <button
                    onClick={navigateToMoreInfoPage}
                    type='button'
                    className={clsx(buttonClassName, s.button)}
                >
                    {text}
                </button>
            </LineContainer>
        </Container>
    )
}
