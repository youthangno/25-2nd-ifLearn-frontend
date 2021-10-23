import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById('root')
);
