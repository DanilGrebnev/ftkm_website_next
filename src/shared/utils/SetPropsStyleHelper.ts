import { IGridPropsStyle } from '@interfaces/Grid'

export const setPropsStyle = (props: IGridPropsStyle) => {
    const styleName: (keyof IGridPropsStyle)[] = [
        'gridTemplateColumns',
        'gridTemplateRows',
        'rowGap',
        'columnGap',
        'gap',
        'grid',
    ]

    return styleName.reduce<{ [key: string]: string | undefined }>(
        (acc, style) => {
            props[style] && (acc[style] = props[style])

            return acc
        },
        {}
    )
}
