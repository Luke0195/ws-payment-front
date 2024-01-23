import { createGlobalStyle } from '@app/libs'

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

html, body, #root{
  height:100%;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

`
