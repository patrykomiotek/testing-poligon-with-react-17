import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Start the mocking conditionally.
const enableMsw = process.env.REACT_APP_ENABLE_MSW || '';
if (parseInt(enableMsw, 10)) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

