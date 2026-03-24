'use client'

import { usePathname, useRouter } from 'next/navigation'

/**
 * Сопостовляет текущий url с url,
 * на который нужно перейти и
 * перебрасывает на него
 */
export const useReturnToCorrectLink = () => {
    const pathname = usePathname()
    const router = useRouter()

    const goRightPage = (correctLink: string) => {
        if (pathname !== correctLink) {
            router.push(correctLink)
        }
    }

    return {
        goRightPage,
    }
}
