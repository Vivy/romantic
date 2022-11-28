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

button {
  padding: 8px;
}

/* .transition-fade {
  transition: 3s;
  opacity: 1;
}

div.is-animating .transition-fade {
  opacity: 0.5;
} */

`

export default GlobalStyle
