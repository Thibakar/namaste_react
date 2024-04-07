import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./src/components/Header/Header";
import MainContainer from "./src/MainContainer";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error/Error"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
