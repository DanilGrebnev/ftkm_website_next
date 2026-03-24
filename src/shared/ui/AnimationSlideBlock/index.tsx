'use client'

import { type ReactNode, CSSProperties, forwardRef, memo } from 'react'
import { m } from 'framer-motion'
interface AnimationSlideBlockProps {
    children: ReactNode
    direction?: 'top' | 'left' | 'right' | 'bottom'
    style?: CSSProperties
    className?: string
    duration?: number
    delay?: number
    once?: boolean
    initial?: Parameters<typeof m.div>[0]['initial'] | {}
    whileInView?: Parameters<typeof m.div>[0]['whileInView'] | {}
    onViewportEnter?: () => void
}

export const AnimationSlideBlock = memo(
    forwardRef<HTMLDivElement, AnimationSlideBlockProps>((props, ref) => {
        const {
            children,
            style,
            className,
            direction = 'left',
            delay = 0,
            duration = 1,
            once = true,
            initial = {},
            whileInView = {},
            onViewportEnter,
        } = props

        return (
            <div
                ref={ref}
                className={className}
                style={{ position: 'relative', overflow: 'hidden', ...style }}
            >
                <m.div
                    transition={{ delay, duration }}
                    style={{ position: 'relative' }}
                    initial={{ [direction]: '-100%', opacity: 0, ...initial }}
                    whileInView={{
                        [direction]: '0%',
                        opacity: 1,
                        ...whileInView,
                    }}
                    onViewportEnter={onViewportEnter}
                    viewport={{ once }}
                >
                    {children}
                </m.div>
            </div>
        )
    })
)

AnimationSlideBlock.displayName = 'AnimationSlideBlock'
