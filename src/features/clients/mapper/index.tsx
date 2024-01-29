import { BodyInterface } from '../interfaces'
import { Client } from '@app/entities/client-model'
import { Icon } from '@app/libs/semantic-ui'
import formatters from '@app/utils/formatters'

const { notEmptyStringOrDefault } = formatters
export const parsedDataToDomain = (
  data: Client[],
  showModal: (data: { id: string; name: string }) => void,
): BodyInterface[] => {
  return data.map((item) => {
    const parsed: BodyInterface = {
      id: notEmptyStringOrDefault(item.id),
      name: notEmptyStringOrDefault(item.name),
      address: notEmptyStringOrDefault(item.address),
      city: notEmptyStringOrDefault(item.city),
      code: notEmptyStringOrDefault(item.code),
      email: notEmptyStringOrDefault(item.email),
      phone: notEmptyStringOrDefault(item.phone),
      sublocallity: notEmptyStringOrDefault(item.sub_locality),
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
