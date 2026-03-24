'use client'

import { useBurgerStore } from '@/shared/store/useBurgerStore'
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import './animation.style.scss'
import s from './s.module.scss'

interface IBurgerMenuModal {
    style?: React.CSSProperties
    children?: React.ReactNode
}
export const BurgerMenuModal: React.FC<IBurgerMenuModal> = ({
    style,
    children,
}) => {
    const isOpenBurgerMenu = useBurgerStore((s) => s.isOpenBurgerMenu)

    const nodeRef = useRef(null)

    return (
        <React.Fragment>
            <CSSTransition
                nodeRef={nodeRef}
                in={isOpenBurgerMenu}
                classNames='modal'
                timeout={300}
                mountOnEnter
            >
                <div
                    ref={nodeRef}
                    style={style}
                    className={s.modal}
                >
                    {children}
                    <div className={s.bottomLine}></div>
                </div>
            </CSSTransition>
        </React.Fragment>
    )
}
