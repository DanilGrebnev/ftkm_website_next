import { ReactNode } from 'react'

export interface IAlertDialog {
    open: boolean
    onClickAction: () => void
    handleClose: () => void
    dialogTitle?: string
    dialogContent?: string
    button1Text?: ReactNode
    button2Text?: ReactNode
}
