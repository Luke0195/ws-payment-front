import { styled } from '@app/libs/styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      margin: 8px 0;
    }
    input {
      width: 300px;
    }
  }
`

export const FormContainer = styled.div`
  padding: 16px 32px;

  header {
    margin: 8px 0;
  }
`

export const Toolbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #c8c8c8;
  margin: 32px 0;
  padding: 8px 0;
  gap: 16px;
`
