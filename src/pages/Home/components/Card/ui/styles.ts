import { styled } from '@app/libs/styled-components'

export const CardWrapper = styled.div`
  border: 1px solid #c8c8c8;
  min-height: 580px;
  border-radius: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #c8c8c8;
`

export const CardTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #c8c8c8;
  display: inline-block;
  color: #c8c8c8;
  margin-left: 8px;
`

export const CardContent = styled.div`
  padding: 16px;

  span {
    margin: 8px 0;
    display: inline-block;
  }

  ul {
    list-style: none;
    li {
      margin: 8px 0;
    }
  }
`
