'use client'

import { LineContainer } from '@components/LineContainer'
import { AnimationSlideBlock } from '@UI/AnimationSlideBlock'
import { CardItem } from './CardListItem'
import { cardListData } from './cardList.data'
import style from './style.module.scss'

export const CardList = () => {
    return (
        <AnimationSlideBlock>
            <LineContainer className={style.LineContainer}>
                <div className={`CardList ${style.CardList}`}>
                    {cardListData.map(({ a, p, span }, i) => (
                        <CardItem
                            key={i}
                            a={a}
                            p={p}
                            span={span}
                        />
                    ))}
                </div>
            </LineContainer>
        </AnimationSlideBlock>
    )
}
