import { LazyMotion, domAnimation } from "framer-motion"
import { FC, ReactNode } from 'react'

export const FramerMotionProvider:FC<{ children: ReactNode }> = ({ children }) => {
    return <LazyMotion  features={domAnimation}>{children}</LazyMotion>
}