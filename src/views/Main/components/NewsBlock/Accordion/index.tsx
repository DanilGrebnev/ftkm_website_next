import { AccordionBlock } from '@UI/Accordion'
import { type IArticleDTO } from '@/shared/api/requests/articles'
import { FC, memo } from 'react'

import { LazyNewsList } from '../NewsList/LazyNewsList'
import s from './s.module.scss'

interface IAccordion {
    className?: string
    newsListClassName?: string
    lastNews?: IArticleDTO[]
}

const Accordion: FC<IAccordion> = memo(props => {
    const { newsListClassName, className, lastNews } = props

    return (
        <AccordionBlock
            AccordionClassName={s.accordion}
            DetailsClassName={s.accordionDetails}
            Summary='Посмотреть последние новости'
            className={className}
        >
            <LazyNewsList className={newsListClassName} lastNews={lastNews} />
        </AccordionBlock>
    )
})

export default Accordion

Accordion.displayName = 'Accordion'
