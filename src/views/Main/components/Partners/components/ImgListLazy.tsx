'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

export const LazyImgList = dynamic(
    () => import('./ImgList'),
    { ssr: false, loading: () => <LoadingCircle /> }
)
