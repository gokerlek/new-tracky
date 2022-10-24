import * as React from "react";

import paths from "./paths.js";
import AuthLayout from "./layouts/Auth.jsx";
import Home from "./pages/Home.jsx";
import MainLayout from "./layouts/Main.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Login from "./pages/Auth/Login.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import CreatePassword from "./pages/Auth/CreatePassword.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import ReferenceCode from "./pages/Auth/ReferenceCode";
import Projects from "./pages/Projects";
import Project from "./pages/Projects/Project";
import Archive from "./pages/Archive";
import Reports from "./pages/Reports.jsx";

let routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: paths.main, element: <Login /> },
      { path: paths.login, element: <Login /> },
      { path: paths.forgotPassword, element: <ForgotPassword /> },
      { path: paths.createPassword, element: <CreatePassword /> },
      { path: paths.referenceCode, element: <ReferenceCode /> },
    ],
  },
  {
    element: <AuthLayout login />,
    children: [{ path: paths.signup, element: <SignUp /> }],
  },
  {
    element: <MainLayout />,
    children: [
      { path: paths.project, element: <Project /> },
      { path: paths.archive, element: <Archive /> },
      { path: paths.projects, element: <Projects /> },
      { path: paths.reports, element: <Reports /> },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
