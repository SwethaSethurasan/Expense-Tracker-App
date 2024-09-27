import React from 'react';
import ReactDOM from 'react-dom/client';
import Appfront from './components/Appfront'
import { GlobalStyle } from './styles/GobalStyle';
import { GlobalProvider } from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
      <Appfront />
    </GlobalProvider>
  </React.StrictMode>
);

