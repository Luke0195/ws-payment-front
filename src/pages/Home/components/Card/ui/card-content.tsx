import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'
export const CardContent = (props: ComponentPropsWithChildren) => {
  return <S.CardContent> {props.children}</S.CardContent>
}
