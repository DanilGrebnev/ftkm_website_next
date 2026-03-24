import { ITab } from '../interface'

/**
 * Компонент, в который можно обренуть
 * дочерний отображаемый компонент и передать label
 * кнопки
 *
 * @example
 * <Tabs>
 *  <Tab label="История">
 *   <div>История</div>
 *  </Tab>
 *  <Tab label="Работник">
 *   <div>Работник</div>
 *  </Tab>
 * </Tabs>
 */
export const Tab: React.FC<ITab> = ({ label, children }) => {
    return children
}
