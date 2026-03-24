'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

export const LazyNewsList = dynamic(
    () => import('./NewsList'),
    { ssr: false, loading: () => <LoadingCircle /> }
)
