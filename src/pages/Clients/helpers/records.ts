import { ItemProps } from '@app/components/Records/record-header'

export const header: ItemProps[] = [
  {
    label: '#ID',
    render_key: 'id',
  },
  {
    label: 'Nome',
    render_key: 'name',
  },
  {
    label: 'Cpf/Cnpj',
    render_key: 'code',
  },
  {
    label: 'Email',
    render_key: 'email',
  },
  {
    label: 'Telefone',
    render_key: 'phone',
  },
  {
    label: 'Endereço',
    render_key: 'address',
  },
  {
    label: 'Cidade',
    render_key: 'city',
  },
  {
    label: 'Bairro',
    render_key: 'sublocallity',
  },
  {
    label: 'Ações',
    render_key: 'actions',
  },
]
