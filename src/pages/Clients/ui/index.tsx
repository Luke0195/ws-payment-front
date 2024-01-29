import { Form } from '../components'
import { Header, RecordRoot } from '@app/components'
import { header } from '../helpers/records'
import clientService from '@app/features/clients/services'
import { useQuery } from '@app/libs/react-query'
import { Context } from '../context'
import { NotificationsProps } from '../interfaces'
import { Icon, Button, Label, Input, Modal } from '@app/libs/semantic-ui'
import * as S from './styles'
import { parsedDataToDomain } from '@app/features/clients/mapper'
import { useState } from 'react'

export const Clients = () => {
  const [notifications, setNotifications] = useState<NotificationsProps>({
    deleteModal: null,
    registerModal: null,
  })
  const [search, setSearch] = useState<string>('')
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => await clientService.fetchAllClients(search),
    refetchInterval: 40000,
  })

  const result = parsedDataToDomain(data ? data.content : [], setNotifications)

  return (
    <Context.Provider
      value={{ notifications, setNotifications, refetch: refetch }}>
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
              value={search}
              onChange={(value) => setSearch(value.target.value)}
              onKeyDown={async (event: any) => {
                if (event.key === 'Enter') {
                  refetch()
                }
              }}
            />
          </div>
          <Button
            color="purple"
            onClick={() =>
              setNotifications((prev) => {
                prev.registerModal = (
                  <Modal open children={<Form />} style={{ borderRadius: 0 }} />
                )
                return { ...prev }
              })
            }>
            {' '}
            Novo Cliente
          </Button>
        </S.Content>

        <RecordRoot.RecordWrapper>
          <RecordRoot.RecordTable>
            <RecordRoot.RecordHeader headerItems={header} />
            <RecordRoot.RecordBody body={result} loading={isLoading} />
          </RecordRoot.RecordTable>
        </RecordRoot.RecordWrapper>
        {notifications.registerModal}
        {notifications.deleteModal}
      </S.Container>
    </Context.Provider>
  )
}
