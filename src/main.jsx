import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contek from './Components/Contek/Contek'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <div>Error</div>
  },

  {
    path: "/contek",
    element: <Contek />,
    errorElement: <div>Error</div>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
