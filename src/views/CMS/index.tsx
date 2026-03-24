'use client'

import { FC, ReactNode } from 'react'

import s from './style.module.scss'
import './style.scss'

interface CMSProps {
    children: ReactNode
}

const CMS: FC<CMSProps> = ({ children }) => {
    return (
        <section
            id='CMS'
            className={s.CMS}
        >
            {children}
        </section>
    )
}

export default CMS
