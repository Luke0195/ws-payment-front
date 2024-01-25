import * as S from './styles'
import { ComponentPropsWithChildren } from '@app/shared/interfaces'

export function RecordTable(props: ComponentPropsWithChildren) {
  return (
    <S.RecordTableContainer singleLine>
      {props.children}{' '}
    </S.RecordTableContainer>
  )
}
