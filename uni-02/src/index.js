import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import NavMenu from './components/navmenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter - responsável por informar que iremos usar o roteamo do browser e gerencia as páginas
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);