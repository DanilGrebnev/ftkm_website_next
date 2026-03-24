'use client'

import dynamic from 'next/dynamic'

export const LazyYandexMap = dynamic(
    () => import('./YandexMap'),
    { ssr: false }
)
