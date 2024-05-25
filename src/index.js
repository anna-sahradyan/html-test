import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateChangeProvider } from './context/ContainerProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StateChangeProvider>
      <App />
    </StateChangeProvider>
  </BrowserRouter>,
);
