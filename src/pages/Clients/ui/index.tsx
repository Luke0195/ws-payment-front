import { Form, Context, NotificationsProps, header } from '../'
import { clientService, parsedDataToDomain } from '@app/features/clients'
import { Icon, Button, Label, Input, Modal } from '@app/libs/semantic-ui'
import { Header, ModalRoot, RecordRoot } from '@app/components'
import { useQuery } from '@app/libs/react-query'
import * as S from './styles'
import { useState } from 'react'
import {
  showSuccessMessage,
  showWarningMessage,
} from '@app/shared/hooks/toasts'

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

  const handleDeleteClient = async (id: string): Promise<void> => {
    try {
      showSuccessMessage('Registro Deletado com successo!')
      await clientService.deleteClientById(id)
      refetch()
      setNotifications((prev) => {
        prev.deleteModal = null
        return { ...prev }
      })
    } catch (error) {
      showWarningMessage('Não foi possível deletar o registro!')
    }
  }

  const showDeleteModal = (data: { id: string; name: string }): void => {
    setNotifications((prev) => {
      prev.deleteModal = (
        <Modal
          open
          size="tiny"
          children={
            <>
              <ModalRoot.ModalHeader>
                <h2> Deletar Cliente.</h2>
              </ModalRoot.ModalHeader>
              <ModalRoot.ModalContent>
                <p> Deseja realmente deletar o registro {data.name}</p>
              </ModalRoot.ModalContent>
              <ModalRoot.ModalFooter>
                <Button
                  color="grey"
                  onClick={() =>
                    setNotifications((prev) => {
                      prev.deleteModal = null
                      return { ...prev }
                    })
                  }>
                  {' '}
                  Cancelar
                </Button>
                <Button
                  color="purple"
                  disabled={isLoading}
                  onClick={async () => handleDeleteClient(data.id)}>
                  Confirmar
                </Button>
              </ModalRoot.ModalFooter>
            </>
          }
        />
      )
      return { ...prev }
    })
  }

  const result = parsedDataToDomain(data ? data.content : [], showDeleteModal)

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
