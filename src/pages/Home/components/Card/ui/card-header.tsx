import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'
export const CardHeader = (props: ComponentPropsWithChildren) => {
  return <S.CardHeader>{props.children}</S.CardHeader>
}
