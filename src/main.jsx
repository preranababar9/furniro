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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
