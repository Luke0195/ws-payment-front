import { styled } from '@app/libs/styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    flex: 1;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 380px;

    .ui.form > .field > label {
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      color: #1a1a1d;
      margin: 8px 0;
    }
    button {
      width: 100%;
    }
  }
`
