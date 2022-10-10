import * as React from "react";
import AuthLayout from "./layouts/Auth.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Layout from "./layouts/main.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Login from "./pages/Auth/Login.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";

let routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
  {
    element: <AuthLayout login />,
    children: [{ path: "signup", element: <About /> }],
  },
  {
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
