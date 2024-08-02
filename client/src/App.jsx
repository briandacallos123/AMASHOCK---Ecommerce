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
import DashboardMerchant, { loader as MerchantLoader } from './pages/merchant/dashboard';

import { action as actionLogin } from './pages/auth/login';
import { action as registerLogin } from './pages/auth/register';
import { action as productAction } from './pages/merchant/create';

import { loader as HomeLoader } from './layout/Homelayout';

import DashboardLayout from './layout/DashboardLayout';
import Create from './pages/merchant/create';
import HomePage, {loader as HomeMainLoader} from './pages/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout/>,
    loader:HomeLoader,
    children:[
      {
        index:true,
        element:<HomePage/>,
        loader:HomeMainLoader
      },
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
            element:<DashboardMerchant/>,
            loader:MerchantLoader,

          },
          {
            path:"orders",
            element:<h1>Orders!</h1>
          },
          {
            path:"profile",
            element:<h1>Profile</h1>
          },
          {
            path:"create-product",
            element:<Create/>,
            action:productAction
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