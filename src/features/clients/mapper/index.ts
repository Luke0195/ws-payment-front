import { BodyInterface } from '../interfaces'
import { Client } from '@app/entities/client-model'

export const parsedDataToDomain = (data: Client[]): BodyInterface[] => {
  return data.map((item) => {
    const parsed: BodyInterface = {
      id: item.id,
      name: item.name,
      address: item.address,
      city: item.city,
      code: item.code,
      email: item.email,
      phone: item.phone,
      subLocallity: item.sub_locality,
    }
    return parsed
  })
}
