import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Noto Sans KR';
  font-weight: 300;
  src: url('./fonts/NotoSansKR-Light.otf') format('woff2'),
    url('./fonts/NotoSansKR-Light.otf') format('woff'),
    url('./fonts/NotoSansKR-Light.otf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 400;
  src: url('./fonts/NotoSansKR-Regular.otf') format('woff2'),
    url('./fonts/NotoSansKR-Regular.otf') format('woff'),
    url('./fonts/NotoSansKR-Regular.otf') format('truetype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 500;
  src: url('./fonts/NotoSansKR-Medium.otf') format('woff2');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 700;
  src: url('./fonts/NotoSansKR-Bold.otf') format('woff2'),
    url('./fonts/NotoSansKR-Bold.otf') format('woff'),
    url('./fonts/NotoSansKR-Bold.otf') format('truetype');
}

${reset}
    *{
      box-sizing: border-box;
        input {
          &:focus {
          outline: none;
           }
      }

      a {
        text-decoration: none;
        color: black
      }

        button {
          padding: 0;
          margin: 0;
          background: none;
          border: none;
          cursor: pointer;
      }
   }

  html,
  body,
  #root {
    font-family: 'Noto Sans KR' !important;
  }
   
  
	
	
`;

export default GlobalStyle;
