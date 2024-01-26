import { Header, RecordRoot } from '@app/components'
import { header } from '../helpers/records'
import { fetchAllClients } from '@app/features/clients/services'
import { useQuery } from '@app/libs/react-query'
import {
  TableRow,
  TableHeaderCell,
  TableFooter,
  Menu,
  MenuItem,
  Icon,
  TableBody,
  TableCell,
} from '@app/libs/semantic-ui'
import * as S from './styles'
import { parsedDataToDomain } from '@app/features/clients/mapper'

export const Clients = () => {
  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchAllClients,
  })
  const result = parsedDataToDomain(data ? data.content : [])
  console.log(result)

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
            {result.map((item) => (
              <TableRow key={String(item)}>
                <TableCell> {item.id} </TableCell>
                <TableCell> {item.name} </TableCell>
                <TableCell> {item.code}</TableCell>
                <TableCell> {item.email}</TableCell>
                <TableCell> {item.phone}</TableCell>
                <TableCell> {item.address}</TableCell>
                <TableCell> {item.city}</TableCell>
                <TableCell> {item.subLocallity}</TableCell>
                <TableCell>
                  <div style={{ gap: 8 }}>
                    <Icon name="edit" />
                    <Icon name="trash" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
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
