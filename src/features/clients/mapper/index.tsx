import { ModalRoot } from '@app/components'
import { BodyInterface } from '../interfaces'
import { Client } from '@app/entities/client-model'
import { Button, Icon, Modal } from '@app/libs/semantic-ui'

import { NotificationsProps } from '@app/pages/Clients/interfaces'

type ModalProps = {
  item: {
    name: string
    id: string
  }
}

const DeleteModal = (data: ModalProps): JSX.Element => {
  return (
    <>
      <ModalRoot.ModalHeader>
        <h2> Deletar Cliente.</h2>
      </ModalRoot.ModalHeader>
      <ModalRoot.ModalContent>
        <p> Deseja realmente deletar o registro {data.item.name}</p>
      </ModalRoot.ModalContent>
      <ModalRoot.ModalFooter>
        <Button color="grey"> Cancelar</Button>
        <Button color="purple"> Confirmar</Button>
      </ModalRoot.ModalFooter>
    </>
  )
}

export const parsedDataToDomain = (
  data: Client[],
  showModal: React.Dispatch<React.SetStateAction<NotificationsProps>>,
): BodyInterface[] => {
  return data.map((item) => {
    const parsed: BodyInterface = {
      id: item.id,
      name: item.name,
      address: item.address,
      city: item.city,
      code: item.code,
      email: item.email,
      phone: item.phone,
      sublocallity: item.sub_locality,
      actions: null,
    }

    parsed.actions = (
      <div style={{ gap: 8 }}>
        <Icon name="edit" />
        <Icon
          name="trash"
          onClick={() =>
            showModal((prev) => {
              prev.deleteModal = (
                <Modal
                  open
                  size="tiny"
                  children={
                    <DeleteModal item={{ id: item.id, name: item.name }} />
                  }
                />
              )
              return { ...prev }
            })
          }
        />
      </div>
    )
    return parsed
  })
}
