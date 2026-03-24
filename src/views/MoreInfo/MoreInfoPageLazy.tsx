'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

export const MoreInfoPageLazy = dynamic(
    () => import('./index'),
    { ssr: false, loading: () => <LoadingCircle fullScreen /> }
)
