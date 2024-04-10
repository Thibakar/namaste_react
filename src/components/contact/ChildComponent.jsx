import React, { Component } from "react";

class ChildComponent extends Component {
  //first constructor will render initially
  constructor() {
    super();
    this.state = {
      userInfo: {
        firstName: "thibakar",
        email: "thiba800@hotmail.com",
        university: "Anna university",
        phone: " 9944880268",
      },
    };
    console.log("sate", this.state.userInfo.name);

    console.log("First class constructor callled ");
  }
  ///Thrid component did mount will cal
  ////API will happen on component dimount only
  componentDidMount = async () => {
    const data = await fetch(`https://dummyjson.com/users/1`);
    const jsonData = await data.json();
    console.log("jsonData", jsonData);

    this.setState({
      userInfo: jsonData,
    });
    console.log("third componentDidMount called ");
  };

  componentDidUpdate=()=>{
    console.log('fouth didmount called ');
  }

  componentWillUnmount=()=>{
    console.log(" Fith componet will unmount")
  }
  render() {
    //Second render will update with initial state value
    console.log("Second render called ");
    return (
      <div>
        <h4>{this.state.userInfo.firstName} </h4>
        <h4>{this.state.userInfo.email} </h4>
        <h4>{this.state.userInfo.phone}</h4>
        <h4>{this.state.userInfo.university}</h4>
      </div>
    );
  }
}

export default ChildComponent;
