import React from 'react';
import axios from 'axios';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from '../../routes/Home.jsx';
import Palindromo from '../../routes/Palindromo.jsx';
import CadastroVeiculo from '../../routes/Login';
import Caixa from '../../routes/Caixa';
import Error from '../../routes/Error.jsx';
//configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/palindromo',
          element: <Palindromo />
        },
        {
          path: '/caixa',
          element: <Caixa />
        },
        {
          path: '/CadastroVeiculo',
          element: <CadastroVeiculo />
        },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
