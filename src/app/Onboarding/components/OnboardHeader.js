import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo/logo.svg";

function OnboardHeader() {
  return (
    <div>
      <div className="py-5">
        {" "}
        <NavLink to="/">
          <img className="hidden md:block w-20 md:w-28" src={logo} alt="Logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default OnboardHeader;
