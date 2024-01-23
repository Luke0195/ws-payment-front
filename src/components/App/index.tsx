import GlobalStyles from '@app/assets/global/global'
import { Content, Footer, Header } from '../'
import * as S from './styles'
export const App = (): JSX.Element => {
  return (
    <S.Container>
      <Header />
      <Content>
        {' '}
        <h1> Teste </h1>
      </Content>
      <Footer />
      <GlobalStyles />
    </S.Container>
  )
}
