import { TStyle } from './Style'

export interface ITabs<S = TStyle> {
    style?: S
    buttonStyle?: S
    array: { btnText: string; element: React.ReactNode }[]
}
