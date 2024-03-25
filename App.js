import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./src/components/Header/Header";

import MainContainer from "./src/MainContainer";
import Footer from "./src/components/Footer/Footer";
const AppLayout = () => {
  return (
    <>
      <div className="row">
        <Header />
        <div className="main">
          <MainContainer />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
