import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Accueil from './Pages/Accueil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
