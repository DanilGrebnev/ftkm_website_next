export interface IGridPropsStyle<S = string> {
    gridTemplateColumns?: S
    gridTemplateRows?: S
    columnGap?: S
    rowGap?: S
    grid?: S
    gap?: S
}

export interface IGridProps extends IGridPropsStyle {
    children?: React.ReactNode | React.ReactNode[]

    style?: React.CSSProperties

    onClick?: (e: React.MouseEvent<HTMLElement>, ...params: any) => void

    className?: string

    id?: string
}
