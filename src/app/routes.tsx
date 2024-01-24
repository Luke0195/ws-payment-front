import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Home, Clients, Payment } from '@app/pages'

export function Routes() {
  return (
    <ReactRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/clients" element={<Clients />} />
    </ReactRoutes>
  )
}
