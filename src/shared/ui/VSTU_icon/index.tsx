import VstuIcon from '@/assets/VSTU.webp'
import { FC } from 'react'
import Link from 'next/link'

import { ImgComponent } from '../ImgComponent'

interface IVSTUIcon {
    style?: React.CSSProperties
    className?: string | undefined
}

export const VSTUIcon: FC<IVSTUIcon> = ({ style, className }) => {
    return (
        <Link
            className={className}
            href='/'
        >
            <ImgComponent
                alt='ВолгГТУ сайт МиТЛП'
                src={VstuIcon}
            />
        </Link>
    )
}
