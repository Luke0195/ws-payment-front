import { Routes } from '@app/app/routes'
import { Header, Content, Footer } from '../components'
import { RouterProvider } from '@app/libs'

import * as S from './styles'
export const Main = () => {
  return (
    <S.Container>
      <Header />
      <Content>
        <Routes />
      </Content>
      <Footer />
    </S.Container>
  )
}
