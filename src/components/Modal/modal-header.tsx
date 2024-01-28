import { Modal } from '@app/libs/semantic-ui'
import { ComponentPropsWithChildren } from '@app/shared/interfaces'

export const ModalHeader = (props: ComponentPropsWithChildren) => {
  return <Modal.Header>{props.children}</Modal.Header>
}
