import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/onlineStatusHook";
import Context from "../../Utils/Context";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  //subsscribe the store from the redux
  const globalState = useSelector((store) => store);
  const { items } = globalState?.cart;
  console.log("cartItems", items);

  ///UseContext -- taking value from context
  const { loggedInUser } = useContext(Context);

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
          <Link to="/contact">Contact us</Link>
        </li>

        <li className="px-5">
          <Link> OnlineStatus: {onlineStatus ? "✅" : "⛔"} </Link>
        </li>
        <li className="px-5">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-5">
          <Link to="/Cart">
            <div class=" ">
              <div class="relative ">
                <div class=" absolute left-3">
                  <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {items?.length}{" "}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="file:  h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </li>
        <li className="px-5">
          <div to="" onClick={onNamechangeHanlder}>
            {loginBtnName}
          </div>
        </li>
        <li className="px-5">User:{loggedInUser}</li>
      </ul>
    </div>
  );
};
export default Header;
