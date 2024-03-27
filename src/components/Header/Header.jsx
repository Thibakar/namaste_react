import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("LOG IN");

  ///Login button name change function
  const onNamechangeHanlder = () => {
    loginBtnName === "LOG IN"
      ? setLoginBtnName("LOG OUT")
      : setLoginBtnName("LOG IN");
  };
  return (
    <div className="nav-container">
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">New Collections</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="" onClick={onNamechangeHanlder}>
                {loginBtnName}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
