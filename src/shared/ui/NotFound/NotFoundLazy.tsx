'use client'

import dynamic from 'next/dynamic'

export const LazyNotFound = dynamic(
    () => import('./index'),
    { ssr: false }
)
