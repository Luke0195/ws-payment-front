import { HttpResponseInterface, BodyInterface } from '../interfaces'

export const parsedDataToDomain = (
  data: HttpResponseInterface[],
): BodyInterface[] => {
  console.log(data)

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
