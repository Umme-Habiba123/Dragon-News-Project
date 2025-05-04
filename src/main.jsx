import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root'
import About from './Pages/About'
import Career from './Pages/Career'
import Home from './Pages/Home'
import CategoryNews from './Pages/CategoryNews'


import {

  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './Pages/Login'
import Register from './Pages/Register'
import AuthLayout from './Components/Homelayout/AuthLayout'
import AuthProvider, { AuthContext } from './Provider/AuthProvider'
import NewsDetails from './Pages/NewsDetails'
import PrivateRoute from './Provider/PrivateRoute'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-center text-7xl mt-80'>404 page not found</h1>,
    children: [
      {

        index: true,
        Component: Home
      },
      {
        path: 'About',
        Component: About
      },
      {
        path: 'Career',
        Component: Career
      },
      {
        path: 'CategoryNews/:id',
        Component: CategoryNews,
        loader: () => fetch('/news.json')
      }
    ]
  },
  {
    path: '/authlayout',
    Component: AuthLayout,
    children: [
      {
        path: '/authlayout/login',
        Component: Login
      },
      {
        path: '/authlayout/register',
        Component: Register
      }
    ]
  },
  {
    path: '/news-details/:id',

    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,

    loader: () => fetch('/news.json')
  },
  {
    path: '/*',
    element: <h2>Error 404</h2>
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
 
  </StrictMode>,
)
