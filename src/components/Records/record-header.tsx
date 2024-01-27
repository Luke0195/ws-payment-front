import * as S from './styles'
import { TableRow, TableHeaderCell } from '@app/libs/semantic-ui'

export type ItemProps = {
  label: string
  render_key: string
}

export type RecordHeaderProps = {
  headerItems: ItemProps[]
}

export const RecordHeader = (props: RecordHeaderProps) => {
  const { headerItems } = props
  return (
    <S.RecordTableHeader>
      <TableRow>
        {headerItems.map((item) => (
          <TableHeaderCell key={String(item.render_key)}>
            {' '}
            {item.label}
          </TableHeaderCell>
        ))}
      </TableRow>
    </S.RecordTableHeader>
  )
}
