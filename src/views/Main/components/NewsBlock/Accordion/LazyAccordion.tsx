'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@/shared/ui/LoadingCircle'

export const LazyAccordion = dynamic(
    () => import('./index'),
    { ssr: false, loading: () => <LoadingCircle /> }
)
