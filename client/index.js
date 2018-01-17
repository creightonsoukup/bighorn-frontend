import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
require("file-loader?name=style.css!./style/style.css");

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));
