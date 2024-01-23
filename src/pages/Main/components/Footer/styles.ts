import styled from 'styled-components'

export const Footer = styled.header`
  width: 100%;
  height: 150px;
  background-color: purple;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    strong {
      font-size: 18px;
      color: #c8c8c8;
    }

    span {
      color: #f8f8f8;
      opacity: 0.8;
    }
  }
`
