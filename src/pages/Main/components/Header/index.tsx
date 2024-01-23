import { Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as S from './styles'
export function Header() {
  return (
    <S.Header>
      <Link to="/">
        <h2> Contas a Pagar </h2>
      </Link>
      <nav>
        <ul>
          <Link to="/clients">
            <li> Clientes</li>
          </Link>
          <li> Pagamentos</li>
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
