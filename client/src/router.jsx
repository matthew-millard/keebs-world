import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import {
  Home,
  Keyboards,
  Switches,
  Keycaps,
  Deskmats,
  Accessories,
  Cart,
  Checkout,
  MyAccount,
  OrderConfirmation,
  EmailVerification,
} from "./pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/keyboards", element: <Keyboards /> },
      { path: "/switches", element: <Switches /> },
      { path: "/keycaps", element: <Keycaps /> },
      { path: "/deskmats", element: <Deskmats /> },
      { path: "/accessories", element: <Accessories /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order-confirmation", element: <OrderConfirmation /> },
      { path: "/myaccount", element: <MyAccount /> },
      { path: "/user/verify/:uniqueString", element: <EmailVerification /> },
    ],
  },
]);

export default router;
