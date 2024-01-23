import GlobalStyles from '@app/assets/global/global'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from '@app/app/routes'
import { Content, Footer, Header } from '../'
import * as S from './styles'
export const App = (): JSX.Element => {
  return (
    <S.Container>
      <Header />
      <Content>
        <RouterProvider router={router} />
      </Content>
      <Footer />
      <GlobalStyles />
    </S.Container>
  )
}
