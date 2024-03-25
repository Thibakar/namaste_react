import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Navbar, Button, Nav } from "react-bootstrap";

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
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Button variant="link" onClick={onNamechangeHanlder}>
                {loginBtnName}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;

<Navbar.Collapse></Navbar.Collapse>;
