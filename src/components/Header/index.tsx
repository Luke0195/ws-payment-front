import { Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react'
import * as S from './styles'
export function Header() {
  return (
    <S.Header>
      <h2> Contas a Pagar </h2>
      <nav>
        <ul>
          <li> Clientes</li>
          <li> Títulos</li>
          <Dropdown text="Relatórios">
            <DropdownMenu>
              <DropdownItem text="Clientes" style={{ width: 100 }} le />
              <DropdownItem text="Títulos" />
            </DropdownMenu>
          </Dropdown>
        </ul>
      </nav>
    </S.Header>
  )
}
