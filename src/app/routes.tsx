import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Clients, Home } from '@app/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/clients',
    element: <Clients />,
  },
])
