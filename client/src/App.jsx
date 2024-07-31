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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout/>,
    children:[
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      }
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