import { Form } from '../components'
import { Header, RecordRoot } from '@app/components'
import { header } from '../helpers/records'
import { fetchAllClients } from '@app/features/clients/services'
import { useQuery } from '@app/libs/react-query'
import {
  TableRow,
  Icon,
  TableBody,
  TableCell,
  Button,
  Label,
  Input,
  Modal,
} from '@app/libs/semantic-ui'
import * as S from './styles'
import { parsedDataToDomain } from '@app/features/clients/mapper'
import { useState } from 'react'

export const Clients = () => {
  const [showRegisterModal, setShowRegisterModal] =
    useState<JSX.Element | null>(null)
  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchAllClients,
  })

  const result = parsedDataToDomain(data ? data.content : [])

  return (
    <S.Container>
      <Header
        title="Clientes"
        description="Utilize os recursos para gerenciar os seus clientes."
      />

      <S.Content>
        <div>
          <Label> Pesquisar registro por nome </Label>
          <Input
            type="text"
            placeholder="Informe no nome do cliente"
            icon={<Icon name="user" />}
            iconPosition="left"
            style={{ width: 400 }}
          />
        </div>
        <Button
          color="purple"
          onClick={() =>
            setShowRegisterModal(
              <Modal open children={<Form />} style={{ borderRadius: 0 }} />,
            )
          }>
          {' '}
          Novo Cliente
        </Button>
      </S.Content>

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
        </RecordRoot.RecordTable>
      </RecordRoot.RecordWrapper>
      {showRegisterModal}
    </S.Container>
  )
}
