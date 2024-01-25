import { Header, RecordRoot } from '@app/components'
import { header } from '../helpers/records'
import {
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableFooter,
  Menu,
  MenuItem,
  Icon,
} from '@app/libs/semantic-ui'
import * as S from './styles'

export const Clients = () => {
  return (
    <S.Container>
      <Header
        title="Clientes"
        description="Utilize os recursos para gerenciar os seus clientes."
      />

      <RecordRoot.RecordWrapper>
        <RecordRoot.RecordTable>
          <RecordRoot.RecordHeader headerItems={header} />
          <TableBody>
            <TableRow>
              <TableCell>First</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableHeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <MenuItem as="a" icon>
                    <Icon name="chevron left" />
                  </MenuItem>
                  <MenuItem as="a">1</MenuItem>
                  <MenuItem as="a">2</MenuItem>
                  <MenuItem as="a">3</MenuItem>
                  <MenuItem as="a">4</MenuItem>
                  <MenuItem as="a" icon>
                    <Icon name="chevron right" />
                  </MenuItem>
                </Menu>
              </TableHeaderCell>
            </TableRow>
          </TableFooter>
        </RecordRoot.RecordTable>
      </RecordRoot.RecordWrapper>
    </S.Container>
  )
}
