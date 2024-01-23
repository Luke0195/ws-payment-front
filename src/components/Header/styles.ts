import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: purple;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 22px;
    color: #f8f8f8;
    text-transform: uppercase;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 16px;

    & > div {
      color: #f8f8f8 !important;
      font-weight: 500;
    }

    li {
      width: 120px;
      color: #f8f8f8;
      font-weight: 500;
      cursor: pointer;
      margin: 0 8px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      &:hover {
        background-color: #f1f1f19a;
      }
    }
  }
`
