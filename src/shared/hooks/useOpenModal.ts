import React from 'react'

/**
 * Открывает модальное окно
 */
export const useOpenModal = () => {
    const [open, setOpen] = React.useState(false)

    const toggleModal = React.useCallback(() => {
        setOpen(p => !p)
    }, [])

    return {
        open,
        toggleModal,
    }
}
