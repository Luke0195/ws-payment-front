import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'
export function Content(props: ComponentPropsWithChildren) {
  return <S.Container> {props.children}</S.Container>
}
