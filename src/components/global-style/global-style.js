import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
}
  body{
    background-color: ${({ theme }) => theme.thirdColor};
  }

`

export default GlobalStyle
