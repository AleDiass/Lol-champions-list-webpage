import React from 'react';
import ReactDOM from 'react-dom';
import RoutesControl from './Routes/RoutesControl'
import GlobalStyle from './GlobalStyle.jsx'

ReactDOM.render(
  <React.StrictMode>
    <RoutesControl/>
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

