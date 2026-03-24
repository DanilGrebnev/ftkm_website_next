/**
 * Высчитывает высоту блока с видео,
 * отнимая высоту header от высоты рабочей области экрана пользователя
 */
class HeightHelper {
    private _height: number = 0

    public set height(number: number) {
        if (Number.isFinite(number)) {
            this._height = window.innerHeight - number
        } else {
            throw new Error('Ошибка. Свойство height может быть только числом')
        }
    }

    public get height(): number {
        return this._height
    }
}

export const HeightCalcHelper = new HeightHelper()
