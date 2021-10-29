import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layout/App';
import StoreProvider from './store/StoreProvider';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);