'use client'

import { getSession } from '@/entities/auth/api/actions/auth'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

interface IWithAuth {
    children: JSX.Element
}

export const WithAuth: FC<IWithAuth> = ({ children }) => {
    const router = useRouter()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        getSession().then((session) => {
            if (!session) {
                router.push('/login')
            } else {
                setChecked(true)
            }
        })
    }, [router])

    if (!checked) return null

    return children
}
