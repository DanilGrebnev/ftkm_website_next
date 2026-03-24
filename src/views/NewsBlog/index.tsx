import { PageTitles } from '@/shared/constants/pageTitles'
import { useSetDocumentTitle } from '@/shared/hooks/useSetDocumentTitle'
import { Container } from '@mui/material'

import s from './NewsBlog.module.scss'
import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'

const NewsBlog = () => {
    useSetDocumentTitle({ title: PageTitles.newsPage })

    return (
        <Container
            id='News-Block'
            maxWidth='xl'
            className={s.NewsContainer}
        >
            <NewsContainer />
            <ButtonContainer />
        </Container>
    )
}

export default NewsBlog
