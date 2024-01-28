import { ItemProps } from '@app/components/Records/record-header'

export const header: ItemProps[] = [
  {
    label: '#ID',
    render_key: 'id',
    width: 2,
  },
  {
    label: 'Nome',
    render_key: 'name',
    width: 2,
  },
  {
    label: 'Cpf/Cnpj',
    render_key: 'code',
    width: 2,
  },
  {
    label: 'Email',
    render_key: 'email',
    width: 2,
  },
  {
    label: 'Telefone',
    render_key: 'phone',
    width: 2,
  },
  {
    label: 'Endereço',
    render_key: 'address',
    width: 2,
  },
  {
    label: 'Cidade',
    render_key: 'city',
    width: 2,
  },
  {
    label: 'Bairro',
    render_key: 'sublocallity',
    width: 2,
  },
  {
    label: 'Ações',
    render_key: 'actions',
    width: 2,
  },
]
