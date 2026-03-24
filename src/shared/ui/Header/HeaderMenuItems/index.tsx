'use client'

import { useReturnToCorrectLink } from '@hooks/useReturnToCorrectLink'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { muiStyles } from '../mui-styles'
import { pageList } from '../pageList'
import style from '../style.module.scss'

export const HeaderMenuItems = () => {
    const { goRightPage } = useReturnToCorrectLink()
    const pathname = usePathname()

    return (
        <Box
            className={clsx('Box2', style.Box2)}
            sx={muiStyles.Box2.sx}
        >
            <nav>
                <Link href='/' className={pathname === '/' ? style.active : undefined}>
                    <Button className={style.Btn}>Главная</Button>
                </Link>

                {pageList.map(({ text, href }) => {
                    return (
                        <a
                            key={href}
                            href={href}
                        >
                            <Button
                                onClick={() => goRightPage('/')}
                                className={style.Btn}
                                variant='text'
                            >
                                {text}
                            </Button>
                        </a>
                    )
                })}

                <Link href='/moreinfo' className={pathname === '/moreinfo' ? style.active : undefined}>
                    <Button className={style.Btn}>Информация о кафедре</Button>
                </Link>

                <Link href='/contacts' className={pathname === '/contacts' ? style.active : undefined}>
                    <Button className={style.Btn}>Контакты</Button>
                </Link>

                <Link href='/news' className={pathname?.startsWith('/news') ? style.active : undefined}>
                    <Button className={style.Btn}>Новости</Button>
                </Link>
            </nav>
        </Box>
    )
}
