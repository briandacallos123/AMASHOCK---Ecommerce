import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homelayout from './layout/Homelayout';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';

import { action as actionLogin } from './pages/auth/login';
import { action as registerLogin } from './pages/auth/register';

import { loader as HomeLoader } from './layout/Homelayout';
import DashboardLayout from './layout/DashboardLayout';
import Create from './pages/merchant/create';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout/>,
    loader:HomeLoader,
    children:[
      {
        path:"login",
        element:<Login/>,
        action:actionLogin
      },
      {
        path:"register",
        element:<Register/>,
        action:registerLogin
      },
      {
        path:"merchant",
        element:<DashboardLayout/>,
        children:[
          {
            index:true,
            element:<Dashboard/>,
          },
          {
            path:"orders",
            element:<Dashboard/>
          },
          {
            path:"profile",
            element:<h1>Profile</h1>
          },
          {
            path:"create-product",
            element:<Create/>
          },
        ]
      },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App