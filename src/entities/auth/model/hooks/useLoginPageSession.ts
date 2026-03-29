import { getSession, logout } from '@/entities/auth/api/actions/auth'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export type LoginPageSessionPhase = 'loading' | 'guest' | 'authed'

export function useLoginPageSession() {
    const router = useRouter()
    const [phase, setPhase] = useState<LoginPageSessionPhase>('loading')

    useEffect(() => {
        getSession().then((session) => {
            setPhase(session ? 'authed' : 'guest')
        })
    }, [])

    const doLogout = useCallback(async () => {
        await logout()
        router.refresh()
        setPhase('guest')
    }, [router])

    return { phase, doLogout }
}
