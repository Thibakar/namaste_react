import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import MainContainer from "./src/MainContainer";
import Footer from "./src/components/Footer/Footer";
const AppLayout = () => {
  return (
    <div className="app_container">
      <MainContainer />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
