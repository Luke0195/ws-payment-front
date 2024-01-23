import { Routes } from '@app/app/routes'
import { Header, Content, Footer } from '../components'

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
