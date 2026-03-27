'use client'

import { FC, ReactNode } from 'react'

import { CmsHeader } from '@/views/CMS/components/CmsHeader'

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
            <CmsHeader />
            {children}
        </section>
    )
}

export default CMS
