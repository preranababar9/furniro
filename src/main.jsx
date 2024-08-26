import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Contactpage from './pages/Contactpage.jsx';
import Cartpage from './pages/Cartpage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "shop",
    element: <Shop/>,
  },
  {
    path: "contact",
    element: <Contactpage/>,
  },
  {
    path: "cart",
    element: <Cartpage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
