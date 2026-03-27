import { LineContainer } from '@components/LineContainer'
import { CardItem } from './CardListItem'
import { cardListData } from './cardList.data'
import style from './style.module.scss'

export const CardList = () => {
    return (
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
    )
}
