'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

export const ContactsPageLazy = dynamic(
    () => import('./index'),
    { ssr: false, loading: () => <LoadingCircle fullScreen /> }
)
