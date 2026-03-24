import { ButtonAndContainer } from '@UI/ButtonAndContainer'

import s from './style.module.scss'

export const JobsFuture = () => {
    return (
        <ButtonAndContainer
            className="FutureJobs"
            buttonClassName={s.button}
            href="https://volgograd.hh.ru/vacancies/metallurg"
            text="Узнай вакансии для твоей будущей специальности"
        />
    )
}
