import { TableBody, TableRow, Loader, TableCell } from '@app/libs/semantic-ui'
import { ItemProps } from './record-header'
import * as S from './styles'

interface RecordBodyProps {
  body: any[]
  header: ItemProps[]
  loading: boolean
}

export function RecordBody(props: RecordBodyProps) {
  const { body, loading, header } = props
  console.log(header)
  return (
    <S.RecordTableBody>
      {loading ? (
        <div>
          <Loader active />
        </div>
      ) : (
        <TableBody style={{ width: '100%' }}>
          <TableRow>
            {body.map((item) => {
              return <TableCell key={String(item)}>{item['name']}</TableCell>
            })}
          </TableRow>
        </TableBody>
      )}
    </S.RecordTableBody>
  )
}
