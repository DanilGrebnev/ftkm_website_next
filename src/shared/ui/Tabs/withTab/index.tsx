import { Tab } from '../Tab'

/**
 * HOC оборачивает компонент в Tab
 * и возвращает новый компонент
 *
 * @param label устанавливает название кнопки для отображения элемента
 * @param children компонент, который будет отбражатсья при нажатии на кнопку
 *
 * @example
 * <Tabs>
 *  {withTab('История', <History />)}
 *  {withTab('Заведующий кафедры', <Employee />)}
 * </Tabs>
 */
export const withTab = (label: string, children: React.ReactElement) => {
    return <Tab label={label}>{children}</Tab>
}
