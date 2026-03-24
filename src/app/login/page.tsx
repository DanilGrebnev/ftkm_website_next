'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

const Login = dynamic(
    () => import('@views/Login'),
    { ssr: false, loading: () => <LoadingCircle fullScreen /> }
)

export default function LoginPage() {
    return <Login />
}
