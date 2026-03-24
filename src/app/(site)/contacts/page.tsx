'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'

const Contacts = dynamic(
    () => import('@views/Contacts'),
    { loading: () => <LoadingCircle fullScreen /> }
)

export default function ContactsPage() {
    return <Contacts />
}
