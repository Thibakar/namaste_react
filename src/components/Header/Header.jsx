import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/onlineStatusHook";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");

  ///Login button name change function
  const onNamechangeHanlder = () => {
    loginBtnName === "Login"
      ? setLoginBtnName("Logout")
      : setLoginBtnName("Login");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between sticky top-0 bg-slate-500 text-cyan-50  px-10">
      <div className=""></div>
      <ul className="flex py-5">
        <li className="px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/about">About</Link>
        </li>
        <li className="px-5">
          <Link to="/contact">
            Contact us</Link>
        </li>

        <li className="px-5">
          <Link> OnlineStatus: {onlineStatus ? "✅" : "⛔"} </Link>
        </li>
        <li className="px-5">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-5">
          <Link to="">Cart </Link>
        </li>
        <li className="px-5">
          <Link to="" onClick={onNamechangeHanlder}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
