declare module '*.webp' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.jpg' {
    const src: string
    export default src
}

declare module '*.jpeg' {
    const src: string
    export default src
}

declare module '*.gif' {
    const src: string
    export default src
}

declare module '*.svg' {
    const src: string
    export default src
}

declare module '*.ico' {
    const src: string
    export default src
}

declare module 'swiper' {
    export const Pagination: any
    export const Navigation: any
    export const Autoplay: any
    export const EffectFade: any
    export const Thumbs: any
}

declare module 'swiper/react' {
    import { ComponentType } from 'react'
    export const Swiper: ComponentType<any>
    export const SwiperSlide: ComponentType<any>
    export function useSwiper(): any
}

declare module 'swiper/swiper-bundle.min.css' {}
