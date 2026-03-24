import { getSession } from '@/entities/auth/model/server_actions/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useIsAuth = () => {
    const router = useRouter()

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.push('/CMS')
            }
        })
    }, [router])
}
