import { Modal } from '@app/libs/semantic-ui'
import { ComponentPropsWithChildren } from '@app/shared/interfaces'

export const ModalContent = (props: ComponentPropsWithChildren) => {
  return <Modal.Content>{props.children}</Modal.Content>
}
