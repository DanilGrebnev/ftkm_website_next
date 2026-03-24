import { useCallback, useState } from 'react'

interface IImageModal {
    isActive: boolean
    src: string
}

/**
 * Хук для открытия модального окна,
 * куда помещается фотография
 */
export const useToggleModal = () => {
    const [state, setState] = useState<IImageModal>({
        isActive: false,
        src: '',
    })

    const openModal = useCallback((src: string) => {
        setState({ src, isActive: true })
    }, [])

    const closeModal = useCallback(() => {
        setState({ ...state, isActive: false })
    }, [])

    return { state, openModal, closeModal }
}
