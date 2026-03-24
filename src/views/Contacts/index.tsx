import { PageTitles } from '@/shared/constants/pageTitles'
import { LazyYandexMap } from '@/shared/ui/YandexMap/LazyYandexMap'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { Container } from '@mui/material'

import { Footer } from '../Main/components'
import { Address } from './components/Address'
import { ContactInformation } from './components/ContactInformation/inedx'
import { WorkingMode } from './components/WorkingMode'
import s from './style.module.scss'

const Contacts = () => {
    useSetDocumentTitle({ title: PageTitles.contactsPage })

    return (
        <section
            id='ContactsBlock'
            className={s.contactsBlock}
        >
            <Container
                maxWidth='xl'
                className={s.container}
            >
                <h1>Контактная информация</h1>

                <section className={s.content}>
                    <Address />
                    <WorkingMode />
                    <ContactInformation />
                </section>

                <LazyYandexMap />
            </Container>
            <Footer />
        </section>
    )
}

export default Contacts
