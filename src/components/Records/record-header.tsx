import * as S from './styles'
import { TableRow, TableHeaderCell } from '@app/libs/semantic-ui'
import { SemanticWIDTHS } from 'semantic-ui-react'

export type ItemProps = {
  label: string
  render_key: any
  width: SemanticWIDTHS | null
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
          <TableHeaderCell
            key={String(item.render_key)}
            width={item.width || 1}>
            {' '}
            {item.label}
          </TableHeaderCell>
        ))}
      </TableRow>
    </S.RecordTableHeader>
  )
}
