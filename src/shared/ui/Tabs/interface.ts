import { CSSProperties, ReactElement } from 'react'

export interface IButton {
    buttonIndex: number
    text: string
    currentTab: number
    onClick: any
    style?: CSSProperties
}

export interface ITabs {
    children?: ReactElement[] | ReactElement
    buttonStyle?: CSSProperties
    modalStyle?: CSSProperties
}

export interface ITab {
    children: ReactElement
    label: string
}

export type prop = { props: { label: string } }
