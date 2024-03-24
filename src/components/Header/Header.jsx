import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Navbar, Button} from "react-bootstrap";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("LOG IN");

  ///Login button name change function
  const onNamechangeHanlder = () => {
    loginBtnName === "LOG IN"
      ? setLoginBtnName("LOG OUT")
      : setLoginBtnName("LOG IN");
  };
  return (
    <div>
      <Navbar
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="link" onClick={onNamechangeHanlder}>
              {loginBtnName}
            </Button>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;

<Navbar.Collapse></Navbar.Collapse>;
