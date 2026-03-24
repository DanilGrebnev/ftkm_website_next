import { CSSProperties } from 'react'

export interface IVideo<S = string> {
    src: S
    title?: S
    controls?: boolean
    poster?: string
    preload?: 'none' | 'metadata' | 'auto'
    style?: CSSProperties
    className?: string
}
