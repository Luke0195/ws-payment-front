import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

export const CardTitle = (props: ComponentPropsWithChildren) => {
  return <S.CardTitle> {props.children}</S.CardTitle>
}
