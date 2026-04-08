'use client'

import { useUserSessionQuery } from '@/shared/api/requests/users'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

interface IWithAuth {
    children: JSX.Element
}

export const WithAuth: FC<IWithAuth> = ({ children }) => {
    const router = useRouter()
    const sessionQuery = useUserSessionQuery()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (sessionQuery.isLoading) return

        if (!sessionQuery.data) {
            router.push('/login')
            return
        }

        setChecked(true)
    }, [router, sessionQuery.data, sessionQuery.isLoading])

    if (!checked) return null

    return children
}
