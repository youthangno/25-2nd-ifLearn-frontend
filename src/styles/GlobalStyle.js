import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
    input {
     &:focus {
       outline: none;
     }
     box-sizing: border-box;
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
