import { Card } from '../components'
import * as S from './styles'
import mock from '../mocks/data.json'
export function Home() {
  return (
    <S.Container>
      {mock.data.map((item) => (
        <Card card={item} />
      ))}
    </S.Container>
  )
}
