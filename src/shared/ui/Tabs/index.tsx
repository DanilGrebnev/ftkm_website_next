import cn from 'classnames'
import React, { useState } from 'react'

import { Button } from './Button'
import { ITabs, prop } from './interface'
import s from './s.module.scss'

export { withTab } from './withTab'

export { Tab } from './Tab'

export const Tabs: React.FC<ITabs> = ({ children, buttonStyle }) => {
    const childrenArray = !Array.isArray(children) ? [children] : children

    //Текущий индекс открытого таба
    const [currentTab, setCurrentTab] = useState(0)

    const onClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLButtonElement

        setCurrentTab(+target.value)
    }

    return (
        <section className={cn('Tabs', s.Tabs)}>
            <div className={cn('Tabs_Button', s.TabsButton)}>
                {childrenArray.map((el, i) => {
                    const element = el as unknown as prop
                    /**
                     * Достаёт label - название кнопки из
                     * props дочерних элементов
                     */
                    const text = element?.props?.label

                    return (
                        <Button
                            style={buttonStyle || {}}
                            key={i}
                            onClick={onClick}
                            buttonIndex={i}
                            currentTab={currentTab}
                            text={text}
                        />
                    )
                })}
            </div>

            <div className={cn('Tabs_Item', s.TabsItem)}>
                {childrenArray.map((tab, i) => i === currentTab && tab)}
            </div>
        </section>
    )
}
