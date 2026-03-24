import s from './style.module.scss'

export const ContactInformation = () => {
    return (
        <div className={s.WorkingMode}>
            <h4>Контактная информация</h4>
            <div>
                <p>Руководитель:</p>
                <a href="https://www.vstu.ru/university/personalii/kidalov_nikolay_alekseevich/">
                    Кидалов Николай Алексеевич
                </a>
            </div>
            <div>
                <p>Телефон:</p>
                <p>(8442) 24-81-43, 23-99-41</p>
            </div>
            <div>
                <p>Электронная почта:</p>
                <a href="mailto:mitlp@vstu.ru">mitlp@vstu.ru</a>
            </div>
        </div>
    )
}
