import React from "react";

// icons
import Inbox from "./assets/Inbox";
import Today from "./assets/Today";
import Calendar from "./assets/Calendar";
import Coins from "./assets/Coins";
import Menu from "./assets/Menu";

// router
import { useLocation, NavLink } from "react-router-dom";

function BottomNav({ showBottomNav, current }) {
  const location = useLocation();

  let path = location.pathname.substring(1);

  const mute = "#626262";
  const active = "#CE1449";

  return (
    <div
      className={`${
        showBottomNav ? "flex " : "hidden"
      } justify-between text-sm px-4 py-6 pb-8 items-center md:hidden absolute bottom-0 bg-white  w-full shadow-md border border-faintGray`}
    >
      {/* TODAY */}
      <NavLink to="/">
        {" "}
        <div className="flex flex-col items-center">
          <Today fill={path === "" ? active : mute} size={22} />
          <p className={`${path === "" ? "text-primary" : "text-gray"} mt-2`}>
            Today
          </p>
        </div>
      </NavLink>
      {/* Inbox */}
      <NavLink to="/inbox">
        {" "}
        <div className="flex flex-col items-center">
          <Inbox fill={path === "messages" ? active : mute} size={22} />
          <p
            className={`${
              path === "messages" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            Inbox
          </p>
        </div>
      </NavLink>
      {/* CALENDER */}
      <NavLink to="/calendar">
        {" "}
        <div className="flex flex-col items-center">
          <Calendar fill={path === "calendar" ? active : mute} size={22} />
          <p
            className={`${
              path === "calendar" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            Calendar
          </p>
        </div>
      </NavLink>
      {/* EARNINGS */}
      <NavLink to="/transactions">
        {" "}
        <div className="flex flex-col items-center">
          <Coins fill={path === "transactions" ? active : mute} size={22} />
          <p
            className={`${
              path === "transactions" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            Earnings
          </p>
        </div>
      </NavLink>
      {/* MENU */}{" "}
      <div className="flex flex-col items-center">
        <Menu fill={path === "menu" ? active : mute} size={22} />
        <p
          className={`${
            path === "cursor-context-menu" ? "text-primary" : "text-gray"
          } mt-2`}
        >
          Menu
        </p>
      </div>
    </div>
  );
}

export default BottomNav;
