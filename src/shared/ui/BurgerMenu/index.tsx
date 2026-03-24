'use client'

import { WindowEvent } from '@hooks/useWindowEvent'
import { useBurgerStore } from '@/shared/store/useBurgerStore'
import clsx from 'clsx'
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './style.module.scss'
import './style.scss'

interface IProps {
    element?: React.ReactNode
    className?: string
}

export const BurgerMenu: React.FC<IProps> = ({ className }) => {
    const isOpenBurgerMenu = useBurgerStore((s) => s.isOpenBurgerMenu)
    const toggleBurgerMenu = useBurgerStore((s) => s.toggleBurgerMenu)

    const nodeRef = useRef(null)

    const toggleMenu = (e: MouseEvent) => {
        toggleBurgerMenu(e)
    }

    return (
        <>
            <WindowEvent
                type='click'
                listener={toggleMenu}
            />
            <CSSTransition
                timeout={300}
                in={isOpenBurgerMenu}
                nodeRef={nodeRef}
                classNames='BurgerIcon'
            >
                <div className={clsx(s.BM_Container, className)}>
                    <div
                        data-openburgermodal
                        className={s.lineWrapper}
                        ref={nodeRef}
                    >
                        <span className={s.line1} />
                        <span className={s.line2} />
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
