import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
const AppLayout = () => {
  return (
    <div className="app_container">
      <Header />
      <CardContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
