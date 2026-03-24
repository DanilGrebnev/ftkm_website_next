'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

const MoreInfo = dynamic(
    () => import('@views/MoreInfo'),
    { loading: () => <LoadingCircle fullScreen /> }
)

export default function MoreInfoPage() {
    return <MoreInfo />
}
