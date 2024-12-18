import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
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
], {
  basename: "/Project",  // Add this basename property
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
