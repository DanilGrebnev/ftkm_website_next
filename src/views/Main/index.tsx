import clsx from 'clsx'

import type { IAdmissionItem } from '@/entities/admission/model/server_actions/types/AdmissionItem'
import { LazyWhenVisible } from '@UI/LazyWhenVisible'

import { Admission } from './components/Admission'
import { CardList } from './components/CardList'
import { CareerOpportunities } from './components/CareerOpportunities'
import { DescriptionProfession } from './components/DescriptionProfession'
import { DepartmentSpecialists } from './components/DepartmentSpecialists'
import { Footer } from './components/Footer'
import { Graduates } from './components/Graduates/Graduates'
import { Hero } from './components/Hero'
import { NewsBlock } from './components/NewsBlock/index'
import { Partners } from './components/Partners'
import { Questions } from './components/Questions'
import { ScientificDirection } from './components/ScientificDirection'
import { SwiperEquipment } from './components/SwiperEquipment'
import { TextAndVideo1 } from './components/TextAndVideo1'
import { TextAndVideo2 } from './components/TextAndVideo2'

import s from './style.module.scss'

interface MainProps {
    admissionItems?: IAdmissionItem[]
}

export const Main = ({ admissionItems = [] }: MainProps) => {
    return (
        <section className={clsx('Main-page', s.Main)}>
            <Hero />
            <CardList />
            <DescriptionProfession />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Graduates />
            <Admission items={admissionItems} />
            <LazyWhenVisible>
                <SwiperEquipment />
            </LazyWhenVisible>
            <Partners />
            <DepartmentSpecialists />
            <ScientificDirection />
            <NewsBlock />
            <Questions />
            <Footer />
        </section>
    )
}
