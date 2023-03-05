import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./hooks/auth";

import theme from "./styles/theme";

import { Create } from "./pages/Create";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Preview } from "./pages/Preview";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { App } from "./layouts/App";
import { Auth } from "./layouts/Auth";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "preview/:id",
        element: <Preview />,
      },
    ],
  },
  {
    element: <Auth />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
