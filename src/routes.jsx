import * as React from "react";
import AuthLayout from "./layouts/Auth.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MainLayout from "./layouts/Main.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Login from "./pages/Auth/Login.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import CreatePassword from "./pages/Auth/CreatePassword.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import ReferenceCode from "./pages/Auth/ReferenceCode";
import Projects from "./pages/Projects";
import Project from "./pages/Projects/Project";

let routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/create-password", element: <CreatePassword /> },
      { path: "/reference-code", element: <ReferenceCode /> },
    ],
  },
  {
    element: <AuthLayout login />,
    children: [{ path: "signup", element: <SignUp /> }],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "projects", element: <Projects /> },
      { path: "projects/:project", element: <Project /> },
      { path: "profile", element: <Home /> },
      { path: "search", element: <Home /> },
      { path: "reports", element: <Home /> },
      { path: "archive", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
