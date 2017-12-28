import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));