import GlobalStyles from '@app/shared/assets/global/global'
import { BrowserRouter } from 'react-router-dom'
import { Main } from '@app/pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Main />
      <GlobalStyles />
      <ToastContainer position="top-right" autoClose={3000} draggable={false} />
    </BrowserRouter>
  )
}
