import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

export const ModalFooter = (props: ComponentPropsWithChildren) => {
  return <S.Container>{props.children}</S.Container>
}
