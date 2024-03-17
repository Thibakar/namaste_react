import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

//React CreateElemet
const title = React.createElement("h2", {}, "Hello ....!");

//React Function
const jsFunction =()=>(console.log('javascript Function'))
const number = 1000;

//React Component 
const Heading = () => <h2>Namaste React using JSX</h2>;
const HeadingComponent = () => (
  <div className="container">
    {title}
    {jsFunction()}
    <Heading />
    <h2>{number}</h2>
    <h2> React Functional Component using JSX </h2>
    <h2>{100 + 100}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
