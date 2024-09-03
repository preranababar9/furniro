import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
import Register from './pages/Register.jsx';
import Userloginpage from './pages/Userloginpage.jsx';
import Admin from "./pages/Admin.jsx";
import Categoryform from "./components/adminform/Categoryform.jsx";
import ProductDetailform from "./components/adminform/ProductDetailform.jsx";
import ProductDetailpage from "./pages/ProductDetailpage.jsx";


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
    path: "productdetail",
    element: <ProductDetailpage/>,
  },
  {
    path: "contact",
    element: <Contactpage/>,
  },
  {
    path: "cart",
    element: <Cartpage/>,
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "login",
    element: <Userloginpage/>,
  },
  {
    path: "admin",
    element: <Admin/>,
    children: [
      {
        path: "category",
        element: <Categoryform/>,
      },
      {
        path: "product",
        element: <ProductDetailform/>,
      },
      
    ],
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer/>
  </StrictMode>,
)
