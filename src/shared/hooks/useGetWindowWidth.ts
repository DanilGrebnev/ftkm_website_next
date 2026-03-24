import { useEffect, useState } from 'react'

export const useGetWindowWidth = () => {
    const [currentWidth, setCurrentWidth] = useState<number>(0)

    useEffect(() => {
        setCurrentWidth(window.screen.width)
    }, [])

    return { currentWidth }
}
