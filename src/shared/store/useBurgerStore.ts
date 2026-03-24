import { create } from 'zustand'

interface BurgerState {
    isOpenBurgerMenu: boolean
    toggleBurgerMenu: (e: MouseEvent) => void
}

export const useBurgerStore = create<BurgerState>((set, get) => ({
    isOpenBurgerMenu: false,
    toggleBurgerMenu: (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const elementWithDataAtr = target.closest('[data-openburgermodal]')

        if (elementWithDataAtr && !get().isOpenBurgerMenu) {
            set({ isOpenBurgerMenu: true })
            document.body.style.position = 'fixed'
            return
        }

        if (get().isOpenBurgerMenu) {
            set({ isOpenBurgerMenu: false })
            document.body.style.position = 'static'
        }
    },
}))
