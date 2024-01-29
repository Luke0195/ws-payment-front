import { BodyInterface } from '../interfaces'
import { Client } from '@app/entities/client-model'
import { Icon } from '@app/libs/semantic-ui'

export const parsedDataToDomain = (
  data: Client[],
  showModal: (data: { id: string; name: string }) => void,
): BodyInterface[] => {
  return data.map((item) => {
    const parsed: BodyInterface = {
      id: item.id,
      name: item.name,
      address: item.address,
      city: item.city,
      code: item.code,
      email: item.email,
      phone: item.phone,
      sublocallity: item.sub_locality,
      actions: null,
    }

    parsed.actions = (
      <div style={{ gap: 8 }}>
        <Icon name="edit" style={{ cursor: 'pointer' }} />
        <Icon
          name="trash"
          onClick={() => showModal({ id: parsed.id, name: parsed.name })}
          style={{ cursor: 'pointer' }}
        />
      </div>
    )
    return parsed
  })
}
