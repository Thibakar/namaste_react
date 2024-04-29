import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import ChildComponent from "./ChildComponent";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content1: " how class-based components will render and update",
      count: 0,
    };
  }
  componentDidMount = () => {
    this.timer = setInterval(() => {
      console.log("thibakar setinterval");
    }, 1000);

    console.log("Parent Didmount");
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  render() {
    console.log("Parent Render");
    return (
      <>
        <div>
          <div className="header">
            <h1>classcomponents </h1>
            <p>component life cycle methods</p>
          </div>
          <div className="content">
            <h4>{this.state.content1}</h4>
            <h4>{this.state.count}</h4>
            <button
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
              }}
            >
              add count
            </button>
          </div>
          <div className="child-component">
            <ChildComponent />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </>
    );
  }
}
export default Contact;
