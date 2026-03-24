'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

export const LazyLoginPage = dynamic(
    () => import('@views/Login'),
    { ssr: false, loading: () => <LoadingCircle fullScreen /> }
)
