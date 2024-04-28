import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./src/components/Header/Header";
import MainContainer from "./src/MainContainer";
import About from "./src/components/About/About";
import Contact from "./src/components/contact/Contact";
import Error from "./src/components/Error/Error";
import ProductCardDetails from "./src/components/ProductCardDetails/ProductCardDetails";

const Grocery = lazy(() => import("./src/GroceryContainer"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<>loading......!!!!</>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ProductCardDetails/:id",
        element: <ProductCardDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
