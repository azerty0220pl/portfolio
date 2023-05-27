import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main/Main';
import Secondary from './Secondary/Secondary';
import CubeClimb from './Secondary/games/CubeClimb';
import FlappyCube from './Secondary/games/FlappyCube';
import NeonRide from './Secondary/games/NeonRide';
import NeonRideII from './Secondary/games/NeonRideII';
import SquareRun from './Secondary/games/SquareRun';

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
  },
  /*{
    path: "cubeclimb",
    element: <CubeClimb />
  },
  {
    path: "flappycube2d",
    element: <FlappyCube />
  },
  {
    path: "neonride",
    element: <NeonRide />
  },
  {
    path: "neonrideii",
    element: <NeonRideII />
  },
  {
    path: "squarerun",
    element: <SquareRun />
  }*/
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
