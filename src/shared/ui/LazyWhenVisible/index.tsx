'use client'

import {
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react'

type LazyWhenVisibleProps = {
    children: ReactNode
    className?: string
    rootMargin?: string
}

/** Рендерит children только после пересечения с viewport (отложенная загрузка тяжёлых чанков). */
export function LazyWhenVisible({
    children,
    className,
    rootMargin = '200px',
}: LazyWhenVisibleProps) {
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el || visible) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { rootMargin, threshold: 0 },
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [visible, rootMargin])

    return (
        <div
            ref={ref}
            className={className}
        >
            {visible ? children : null}
        </div>
    )
}
