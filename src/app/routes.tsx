import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Home, Clients } from './routes-list'

export function Routes() {
  return (
    <ReactRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
    </ReactRoutes>
  )
}
