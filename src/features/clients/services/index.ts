import { axios } from '@app/libs/axios'
import { InvalidRequest } from '@app/shared/errors'

export const fetchAllClients = async () => {
  const response = await axios.get('/clients')
  if (typeof response.data !== 'object')
    throw new InvalidRequest('Error Invalid Request')
  return response.data
}
