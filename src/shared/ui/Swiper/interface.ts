export interface ISwiperComponet {
    src?: string[]
    style?: React.CSSProperties
    maxWdth?: 'xl' | 'md' | 'lg' | 'xs' | 'sm'
    slidesPerView?: number
    spaceBetween?: number
    children?: React.ReactNode[]
    navigation?: boolean
    pagination?: boolean
    className?: string
}
