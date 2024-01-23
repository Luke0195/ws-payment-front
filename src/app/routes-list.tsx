import { RouteObject } from 'react-router-dom'
import { Home, Clients } from '@app/pages'

const routesList: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/clients',
    element: <Clients />,
  },
]

export { routesList }
