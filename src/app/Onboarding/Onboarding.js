import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";

// Extras
import List from "./CheckList/List";

import "./index.css";

function Onboarding() {
  return (
    <div className="min-h-screen pb-20 bg-lightGray px-2 md:px-10">
      <div className="py-5">
        {" "}
        <NavLink to="/">
          <img className="hidden md:block w-20 md:w-28" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <List />
    </div>
  );
}

export default Onboarding;
