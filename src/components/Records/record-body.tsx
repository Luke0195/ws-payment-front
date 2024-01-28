import { TableBody, TableRow, TableCell } from '@app/libs/semantic-ui'

interface RecordBodyProps {
  body: any[]
  loading: boolean
}

export function RecordBody(props: RecordBodyProps) {
  const { body } = props

  return (
    <TableBody>
      {body.map((item) => {
        const fields = Object.keys(item).map((field) => field)
        return (
          <TableRow>
            {fields.map((field) => (
              <TableCell width="2"> {item[field]}</TableCell>
            ))}
          </TableRow>
        )
      })}
    </TableBody>
  )
}
