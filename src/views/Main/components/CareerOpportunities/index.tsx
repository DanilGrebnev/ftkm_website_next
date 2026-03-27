import { BlueButton } from '@UI/BigButton'
import { Grid } from '@components/Grid'
import s from './style.module.scss'

export const CareerOpportunities = () => {
    return (
        <Grid
            id='Career-opportunities'
            className={`Career-opportunities ${s.Career}`}
        >
            <div className={s.title}>
                <h2>Карьерные возможности</h2>
            </div>
            <ul>
                <>
                    <h4 className={s.subtitle}>Ты научишься:</h4>
                    <li>
                        раз&shy;раба&shy;тывать
                        техно&shy;ло&shy;гичес&shy;кие про&shy;цес&shy;сы
                        вы&shy;плав&shy;ки ста&shy;лей, чу&shy;гу&shy;нов,
                        цветных металлов и сплавов;
                    </li>
                    <li>
                        компью&shy;терно&shy;му 3D
                        мо&shy;де&shy;ли&shy;рова&shy;нию, а так же
                        про&shy;екти&shy;рова&shy;нию ли&shy;тых
                        заго&shy;то&shy;вок и техноло&shy;гичес&shy;ких
                        про&shy;цес&shy;сов изго&shy;тов&shy;ле&shy;ния
                        ли&shy;тей&shy;ных форм;
                    </li>
                    <li>
                        проек&shy;ти&shy;ровать литей&shy;ные це&shy;ха и
                        учас&shy;тки;
                    </li>
                    <li>
                        совре&shy;мен&shy;ным ме&shy;то&shy;дам
                        контро&shy;ля ка&shy;чес&shy;тва различ&shy;ных
                        мате&shy;риа&shy;лов и изде&shy;лий;
                    </li>
                    <li>
                        эксплуа&shy;ти&shy;ро&shy;вать и
                        ремон&shy;ти&shy;ровать ши&shy;ро&shy;кую гам&shy;му
                        ма&shy;шин и меха&shy;низ&shy;мов в
                        совре&shy;мен&shy;ных промы&shy;шлен&shy;ных
                        пред&shy;прия&shy;тиях;
                    </li>
                </>
            </ul>
            <ul>
                <>
                    <h4 className={s.subtitle}>
                        Приобретенные знания и умения позволят тебе:
                    </h4>
                    <li>
                        по&shy;стро&shy;ить карье&shy;ру на
                        маши&shy;но&shy;строитель&shy;ных и
                        метал&shy;лур&shy;гических пред&shy;прия&shy;тиях
                        стра&shy;ны, в
                        науч&shy;но-иссле&shy;дова&shy;тель&shy;ских
                        инсти&shy;ту&shy;тах, торго&shy;вых
                        органи&shy;за&shy;циях;
                    </li>
                    <li>
                        полу&shy;чить дол&shy;жность
                        инже&shy;не&shy;ра-конструк&shy;тора,
                        инже&shy;не&shy;ра-техно&shy;ло&shy;га,
                        инже&shy;не&shy;ра-ис&shy;сле&shy;дова&shy;теля,
                        менед&shy;же&shy;ра и стать в после&shy;дую&shy;щем
                        на&shy;чаль&shy;ни&shy;ком це&shy;ха, глав&shy;ным
                        метал&shy;лур&shy;гом, на&shy;чаль&shy;ни&shy;ком
                        отде&shy;ла и директором на предприятиях Российской
                        Феде&shy;ра&shy;ции; Ра&shy;бо&shy;тать на
                        пред&shy;прия&shy;тиях пи&shy;ще&shy;вой,
                        пере&shy;раба&shy;тыва&shy;ющей
                        промыш&shy;лен&shy;но&shy;сти и в
                        про&shy;мыш&shy;лен&shy;но&shy;сти по
                        из&shy;го&shy;то&shy;вле&shy;нию строитель&shy;ных
                        мате&shy;риа&shy;лов.
                    </li>
                </>
            </ul>
            <ul>
                <>
                    <h4 className={s.subtitle}>
                        Перспективы продолжить научную деятельность
                    </h4>
                    <li className={s['none-decoration']}>
                        После успеш&shy;но&shy;го окон&shy;ча&shy;ния
                        обу&shy;че&shy;ния по програм&shy;ме
                        бака&shy;лав&shy;риата и магистра&shy;туры, ты
                        мо&shy;жешь про&shy;дол&shy;жить обуче&shy;ние и
                        по&shy;сту&shy;пить в аспи&shy;ран&shy;туру для
                        под&shy;готов&shy;ки канди&shy;дат&shy;ской
                        дис&shy;сер&shy;тации.
                    </li>
                </>
            </ul>
            <div className={s.button}>
                <BlueButton />
            </div>
        </Grid>
    )
}
