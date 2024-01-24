import { MdErrorOutline } from 'react-icons/md'
import * as S from './styles'
type ComponentProps = {
  text: string
}

export const WarningMessage = (props: ComponentProps) => {
  const { text } = props
  return (
    <S.Container>
      <span> {text} </span>
      <MdErrorOutline />
    </S.Container>
  )
}
