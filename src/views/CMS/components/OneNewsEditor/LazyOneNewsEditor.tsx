'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@/shared/ui/LoadingCircle'

export const LazyOneNewsEditor = dynamic(
    () => import('./index'),
    { ssr: false, loading: () => <LoadingCircle fullScreen /> }
)
