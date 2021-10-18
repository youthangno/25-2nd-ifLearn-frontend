import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
    box-sizing: border-box;
    input {
     &:focus {
       outline: none;
     }
    }
   button {
     padding: 0;
     margin: 0;
     background: none;
     border: none;
     cursor: pointer;
  }
   
	
	
`;

export default GlobalStyle;
