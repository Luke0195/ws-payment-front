import { TableBody, TableRow, Loader } from '@app/libs/semantic-ui'
import { ItemProps } from './record-header'
import * as S from './styles'

interface RecordBodyProps {
  body: any[]
  header: ItemProps[]
  loading: boolean
}

export function RecordBody(props: RecordBodyProps) {
  const { loading, header } = props
  const fields = header.map((item) => item.render_key)
  console.log(fields)
  return (
    <S.RecordTableBody>
      {loading ? (
        <div>
          <Loader active />
        </div>
      ) : (
        <TableBody>
          <TableRow></TableRow>
        </TableBody>
      )}
    </S.RecordTableBody>
  )
}
