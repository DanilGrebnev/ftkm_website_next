import React from 'react'

type TCardItem = { a: string; p: string; span: string | undefined }

export const CardItem = React.memo(({ a, p, span }: TCardItem) => {
    return (
        <a href={a}>
            <img
                loading='lazy'
                alt='vstu-logo'
                src='images/Logo_vstu.webp'
            />
            <p>
                {p} {span ? <span>{span}</span> : ''}
            </p>
        </a>
    )
})
