import clsx from 'clsx'

import { HomeAdmissionWidget } from '@/widgets/home-admission'
import { HomeNewsWidget } from '@/widgets/home-news'
import { LazyWhenVisible } from '@UI/LazyWhenVisible'

import { CardList } from './components/CardList'
import { CareerOpportunities } from './components/CareerOpportunities'
import { DescriptionProfession } from './components/DescriptionProfession'
import { DepartmentSpecialists } from './components/DepartmentSpecialists'
import { Footer } from './components/Footer'
import { Graduates } from './components/Graduates/Graduates'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Questions } from './components/Questions'
import { ScientificDirection } from './components/ScientificDirection'
import { SwiperEquipment } from './components/SwiperEquipment'
import { TextAndVideo1 } from './components/TextAndVideo1'
import { TextAndVideo2 } from './components/TextAndVideo2'

import s from './style.module.scss'

export const Main = () => {
    return (
        <section className={clsx('Main-page', s.Main)}>
            <Hero />
            <CardList />
            <DescriptionProfession />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Graduates />
            <HomeAdmissionWidget />
            <LazyWhenVisible>
                <SwiperEquipment />
            </LazyWhenVisible>
            <Partners />
            <DepartmentSpecialists />
            <ScientificDirection />
            <HomeNewsWidget />
            <Questions />
            <Footer />
        </section>
    )
}
