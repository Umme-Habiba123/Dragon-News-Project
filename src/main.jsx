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
    path:'/auth',
    element:<h2>Authentication Layout</h2>
  },
  {
    path:'/news',
    element:<h2>News Layout</h2>
  },
  {
    path:'/*',
    element:<h2>Error 404</h2>
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
