import { styled } from '@app/libs/styled-components'
import { Segment, Table, TableHeader } from '@app/libs/semantic-ui'

export const RecordRrapperContainer = styled(Segment)`
  padding: 0 !important;
  margin: 32px auto !important;
  width: 100%;
  max-width: 1580px !important;
  background-color: red;
`

export const RecordTableContainer = styled(Table)`
  width: 100%;
  margin: 0 auto;
`

export const RecordTableHeader = styled(TableHeader)``

export const RecordTableBody = styled.div`
  width: 100%;
`
