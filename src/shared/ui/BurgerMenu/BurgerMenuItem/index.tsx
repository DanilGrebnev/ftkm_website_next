'use client'

import { pageList } from '@components/Header/pageList'
import { useReturnToCorrectLink } from '@hooks/useReturnToCorrectLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export const BurgerMenuItems = () => {
    const { goRightPage } = useReturnToCorrectLink()
    const pathname = usePathname()

    return (
        <nav>
            <Link href="/" className={pathname === '/' ? 'active' : undefined}>Главная</Link>

            {pageList.map(({ href, text }) => {
                return (
                    <a
                        onClick={() => goRightPage('/')}
                        key={href}
                        href={href}
                    >
                        {text}
                    </a>
                )
            })}

            <Link href="/contacts" className={pathname === '/contacts' ? 'active' : undefined}>Контакты</Link>

            <Link href="/moreinfo" className={pathname === '/moreinfo' ? 'active' : undefined}>Больше информации</Link>

            <Link href="/news" className={pathname?.startsWith('/news') ? 'active' : undefined}>Новости</Link>
        </nav>
    )
}
