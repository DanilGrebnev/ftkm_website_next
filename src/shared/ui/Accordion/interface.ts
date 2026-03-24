export interface IAccordionBlock<S = string, CSS = React.CSSProperties> {
    children?: React.ReactNode | React.ReactNode[]
    AccordionStyle?: CSS
    DetailsStyle?: CSS
    SummaryStyle?: CSS
    AccordionClassName?: S
    DetailsClassName?: S
    Summary?: S
    className?: S
}
