import { ImgComponent } from '@/shared/ui/ImgComponent'
import { Grid } from '@components/Grid'
import Link from 'next/link'
import React from 'react'

import s from './style.module.scss'

interface IFooter {
    style?: React.CSSProperties
}

export const Footer: React.FC<IFooter> = ({ style }) => {
    const year = new Date().getFullYear()

    return (
        <footer
            style={style}
            className={`Footer ${s.Footer}`}
        >
            <Grid className={s.inner}>
                <Link
                    href="/"
                    className={s.logoLink}
                    aria-label="На главную — ВолгГТУ, кафедра МиТЛП"
                >
                    <ImgComponent
                        alt="ВолгГТУ сайт МиТЛП"
                        src="images/Logo_vstu.webp"
                    />
                </Link>
                <p className={s.dept}>
                    Кафедра{' '}
                    <span className={s.deptName}>
                        Машины и технология литейного производства
                    </span>
                </p>
                <p className={s.copy}>
                    © {year} Кафедра <span className={s.abbr}>МиТЛП</span>
                </p>
                <Link
                    href="/login"
                    className={s.loginLink}
                >
                    Войти
                </Link>
            </Grid>
        </footer>
    )
}
