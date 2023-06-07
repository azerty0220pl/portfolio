import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main/Main';
import Secondary from './Secondary/Secondary';

import "./index.css";

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/projects/",
    element: <Secondary />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
