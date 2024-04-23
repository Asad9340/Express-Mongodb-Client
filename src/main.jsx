import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Register';
import Users from './Users';
import UpdateUser from './UpdateUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path: '/update/:id',
    element: <UpdateUser />,
    loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
