'use client'

import { BurgerMenuItems } from '@UI/BurgerMenu/BurgerMenuItem'
import { HeightCalcHelper } from '@lib/HeightHelper'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

import { VSTUIcon } from '../VSTU_icon'
import { HeaderMenuItems } from './HeaderMenuItems'
import s from './style.module.scss'

const BurgerMenu = dynamic(
    () => import('@UI/BurgerMenu').then(mod => ({ default: mod.BurgerMenu })),
    { ssr: false }
)

const BurgerMenuModal = dynamic(
    () => import('@UI/BurgerMenu/BurgerMenuModal').then(mod => ({ default: mod.BurgerMenuModal })),
    { ssr: false }
)

export const Header = () => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        if (ref.current) {
            HeightCalcHelper.height = ref.current.offsetHeight
        }
    }, [ref])

    return (
        <header
            ref={ref}
            className={s.headerWrapper}
            id='Header'
        >
            <AppBar
                className={s.Header}
                position='sticky'
            >
                <Container maxWidth='xl'>
                    <Toolbar
                        className={s.toolbar}
                        disableGutters
                    >
                        <BurgerMenu className={s['burger-menu']} />

                        <VSTUIcon className={s.vstuIcon} />

                        <HeaderMenuItems />
                    </Toolbar>
                </Container>
            </AppBar>
            <BurgerMenuModal>
                <BurgerMenuItems />
            </BurgerMenuModal>
        </header>
    )
}
