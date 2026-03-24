'use client'

import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { clsx } from 'clsx'
import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { NewsBlock } from './components/NewsBlock/index'
import { Questions } from './components/Questions'
import { UniversityInfo } from './components/UniversityInfoVideo'
import { JobsFuture } from './components/JobsFuture'

const Admission = dynamic(
    () => import('./components/Admission').then(mod => ({ default: mod.Admission })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const CardList = dynamic(
    () => import('./components/CardList').then(mod => ({ default: mod.CardList })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const CareerOpportunities = dynamic(
    () => import('./components/CareerOpportunities').then(mod => ({ default: mod.CareerOpportunities })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const DescriptionProfession = dynamic(
    () => import('./components/DescriptionProfession').then(mod => ({ default: mod.DescriptionProfession })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const DepartmentSpecialists = dynamic(
    () => import('./components/DepartmentSpecialists').then(mod => ({ default: mod.DepartmentSpecialists })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const Graduates = dynamic(
    () => import('./components/Graduates/Graduates').then(mod => ({ default: mod.Graduates })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const Partners = dynamic(
    () => import('./components/Partners').then(mod => ({ default: mod.Partners })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const ScientificDirection = dynamic(
    () => import('./components/ScientificDirection').then(mod => ({ default: mod.ScientificDirection })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const SwiperEquipment = dynamic(
    () => import('./components/SwiperEquipment').then(mod => ({ default: mod.SwiperEquipment })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const TextAndVideo1 = dynamic(
    () => import('./components/TextAndVideo1').then(mod => ({ default: mod.TextAndVideo1 })),
    { ssr: false, loading: () => <LoadingCircle /> }
)
const TextAndVideo2 = dynamic(
    () => import('./components/TextAndVideo2').then(mod => ({ default: mod.TextAndVideo2 })),
    { ssr: false, loading: () => <LoadingCircle /> }
)

import s from './style.module.scss'

export const Main = () => {
    const title =
        'Кафедра «Машины и технология литейного производства» | ВолгГТУ'

    useSetDocumentTitle({
        title,
    })

    return (
        <section className={clsx('Main-page', s.Main)}>
            <Hero />
            <CardList />
            <DescriptionProfession />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Graduates />
            <Admission />
            <SwiperEquipment />
            <Partners />
            <DepartmentSpecialists />
            <ScientificDirection />
            <NewsBlock />
            <Questions />
            <Footer />
        </section>
    )
}
