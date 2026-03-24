import s from './style.module.scss'

const YandexMap = () => (
    <div
        className={s.Map}
        style={{ position: 'relative', overflow: 'hidden' }}
    >
        <a
            href='https://yandex.ru/maps/38/volgograd/?utm_medium=mapframe&utm_source=maps'
            style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '0px',
            }}
        >
            Волгоград
        </a>
        <a
            href='https://yandex.ru/maps/38/volgograd/house/prospekt_imeni_v_i_lenina_28/YE0YcwVoS00CQFpifXtwcnVhbA==/?ll=44.528285%2C48.713928&utm_medium=mapframe&utm_source=maps&z=17.14'
            style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '14px',
            }}
        >
            Проспект имени В.И. Ленина, 28 — Яндекс Карты
        </a>
        <iframe
            title='Yandex Map'
            src='https://yandex.ru/map-widget/v1/?ll=44.528285%2C48.713928&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0MjYzNRJV0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINC_0YDQvtGB0L_QtdC60YIg0LjQvNC10L3QuCDQki7QmC4g0JvQtdC90LjQvdCwLCAyOCIKDfccMkIVENtCQg%2C%2C&z=17.14'
            allowFullScreen={true}
            style={{ position: 'relative', border: 'none' }}
        />
    </div>
)

export default YandexMap
