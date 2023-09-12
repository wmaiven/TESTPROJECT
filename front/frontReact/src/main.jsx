import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from '../../routes/home.jsx';
import Palindromo from '../../routes/palindromo.jsx';
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
          path: '/home',
          element: <Home />
        },
        {
          path: '/palindromo',
          element: <Palindromo />
        }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
