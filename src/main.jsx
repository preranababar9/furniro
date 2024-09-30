import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartC.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './pages/Shop.jsx';
import Contactpage from './pages/Contactpage.jsx';
import Cartpage from './pages/Cartpage.jsx';
import Register from './pages/Register.jsx';
import Userloginpage from './pages/Userloginpage.jsx';
import Admin from "./pages/Admin.jsx";
import Categoryform from "./components/adminform/Categoryform.jsx";
import ProductDetailform from "./components/adminform/ProductDetailform.jsx";
import ProductDetailpage from "./pages/ProductDetailpage.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import Checkoutpage from "./pages/Checkoutpage.jsx";
import Order from "./pages/Order.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "shop",
    element: <Shop/>,
  },
  {
    path: "/product/:id",
    element: <ProductDetailpage/>,
  },
  {
    path: "checkout",
    element: <Checkoutpage/>,
  },
  {
    path: "contact",
    element: <Contactpage/>,
  },
  {
    path: "about",
    element: <Aboutpage/>,
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
    
      path: "order",
      element: <Order/>,
   
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
      <CartProvider>
     <RouterProvider router={router} />
     <ToastContainer/>
     </CartProvider>
  </StrictMode>,
)
