import { axios } from '@app/libs/axios'
import { InvalidRequest } from '@app/shared/errors'
import { FormData } from '../interfaces'

class ClientService {
  async fetchAllClients(): Promise<any> {
    const response = await axios.get('/clients')
    if (typeof response !== 'object')
      throw new InvalidRequest('Error Invalid Response')
    return response.data
  }

  async createClient(client: FormData): Promise<any> {
    const response = await axios.post('/client', client)
    if (typeof response !== 'object')
      throw new InvalidRequest('Error  Invalid Response')
    return response.data
  }
}

export default new ClientService()
