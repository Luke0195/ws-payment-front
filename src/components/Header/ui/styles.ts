import { styled } from '@app/libs/styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    color: #b1b1b1;
  }
`
