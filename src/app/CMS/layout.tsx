'use client'

import { WithAuth } from '@/entities/auth/ui/WithAuth'
import CMS from '@views/CMS'

export default function CMSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <WithAuth>
            <CMS>{children}</CMS>
        </WithAuth>
    )
}
