import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface IUseShowIfIsView {
    threshold?: number
}

export const useShowIfIsView = (props: IUseShowIfIsView = {}) => {
    const { threshold = 0.5 } = props

    const [active, isActive] = useState(false)

    const { ref, inView } = useInView({
        threshold: threshold,
    })

    useEffect(() => {
        if (inView) {
            isActive(true)
        }
    }, [inView])

    return { ref, active, inView }
}
