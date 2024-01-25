import { ComponentPropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

export function RecordWrapper(props: ComponentPropsWithChildren) {
  return (
    <S.RecordRrapperContainer raised>{props.children}</S.RecordRrapperContainer>
  )
}
