import GlobalStyles from '@app/shared/assets/global/global'
import { BrowserRouter } from 'react-router-dom'
import { Main } from '@app/pages'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Main />
      <GlobalStyles />
    </BrowserRouter>
  )
}
