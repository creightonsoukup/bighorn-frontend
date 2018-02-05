import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, applyRouterMiddleware } from 'react-router-dom';
import { render } from 'react-dom';
import ScrollToTop from './components/ScrollToTop';
require("file-loader?name=style.css!./style/style.css");

render((
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
  ), document.getElementById('root'));
