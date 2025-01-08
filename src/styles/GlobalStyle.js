import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';
import colors from '../theme/colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.dark};
    color: ${colors.black};
  }
  
  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;
