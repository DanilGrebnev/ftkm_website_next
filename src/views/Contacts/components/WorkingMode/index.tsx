import s from './style.module.scss'

export const WorkingMode = () => {
    return (
        <div className={s.WorkingMode}>
            <h4>Режим работы</h4>
            <p>
                Пн-Чт: 8:30 — 17:15;Пт: 8:30 — 16:00; <br />
                Обед с 12.30 — 13.00; <br />
                Выходные: суббота, воскресенье.
            </p>
        </div>
    )
}
