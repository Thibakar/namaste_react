import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./src/components/Header/Header";
import MainContainer from "./src/MainContainer";
import About from "./src/components/About/About";
import Contact from "./src/components/contact/Contact";
import Error from "./src/components/Error/Error";
import Context from "./src/Utils/Context";
import { Provider } from "react-redux";
import AppStore from "./src/Redux/Store/AppStore";
import Cart from "./src/components/Cart/Cart";

const Grocery = lazy(() => import("./src/GroceryContainer"));
const ProductCardDetails = lazy(() =>
  import("./src/components/ProductCardDetails/ProductCardDetails")
);

const AppLayout = () => {
  const [username, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Thibakar",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <Provider store={AppStore}>
        <Context.Provider value={{ loggedInUser: username, setUserName }}>
          <Header />
          <Outlet />
        </Context.Provider>
      </Provider>
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
        path: "/Cart",
        element: <Cart/>,
      },
      {
        path: "/ProductCardDetails/:id",
        element: (
          <Suspense fallback={<>loading......!!!!</>}>
            <ProductCardDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
