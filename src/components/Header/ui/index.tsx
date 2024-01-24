import { ComponentProps } from '../interfaces'
import * as S from './styles'

export function Header(props: ComponentProps) {
  const { title, description } = props
  return (
    <S.Container>
      <h2> {title} </h2>
      <p> {description} </p>
    </S.Container>
  )
}
