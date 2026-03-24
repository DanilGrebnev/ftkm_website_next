'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

export const LazyCmsPage = dynamic(
    () => import('@views/CMS'),
    { ssr: false, loading: () => <LoadingCircle fullScreen /> }
)
