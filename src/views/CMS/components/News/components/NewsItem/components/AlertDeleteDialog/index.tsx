'use client'

import dynamic from 'next/dynamic'

const AlertDialog = dynamic(
    () => import('@UI/AlertDialog').then(mod => ({ default: mod.AlertDialog })),
    { ssr: false }
)

interface props {
    open: boolean
    closeModal: () => void
    isLoading: boolean
    onConfirm: () => Promise<void>
}

export const AlertDeleteDialog: React.FC<props> = ({
    open,
    closeModal,
    isLoading,
    onConfirm,
}) => {
    return (
        <AlertDialog
            open={open}
            handleClose={closeModal}
            dialogTitle='Удалить новость?'
            onClickAction={() => {
                if (isLoading) return
                void onConfirm()
            }}
            button2Text={isLoading ? 'Удаление...' : undefined}
        />
    )
}
