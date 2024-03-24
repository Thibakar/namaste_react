import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainContainer from "./src/MainContainer";
import Footer from "./src/components/Footer/Footer";
const AppLayout = () => {
  return (
    <div className="app_container">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./src/components/Header/Header";
