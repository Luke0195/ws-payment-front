import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

export function CardWrapper(props: ComponentPropsWithChildren) {
  return <S.CardWrapper> {props.children}</S.CardWrapper>
}
