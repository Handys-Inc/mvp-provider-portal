import React, { useState } from "react";

import logo from "../../assets/logo/logo.svg";

import { Transition } from "@headlessui/react";

import { Fragment } from "react";

import { NavLink } from "react-router-dom";

import Profile from "../../assets/images/profile.png";

import Bell from "../../assets/custom-svgs/Bell";

import Notifications from "../Notifcations/Notifications";

import "./index.css";

function Header() {
  const [showNoti, setShowNoti] = useState(false);

  // menu links
  const links = [
    { href: "/", label: "Today" },
    { href: "/inbox", label: "Inbox" },
    { href: "/calendar", label: "Calendar" },
    { href: "/transactions", label: "Transaction history" },
    { href: "/perks", label: "Perks" },
  ];

  return (
    <div className="block z-30">
      <div className="flex flex-row justify-between items-center px-5 pt-5 pb-3">
        <NavLink to="/">
          <img className="w-20 md:w-28" src={logo} alt="Logo" />
        </NavLink>

        {/* Links */}
        <ul className="hidden md:block main-menu">
          {links.map((link) => {
            return (
              <NavLink to={link.href}>
                <li>{link.label}</li>
              </NavLink>
            );
          })}
        </ul>

        {/* Profile  */}
        <div className="flex items-center gap-2">
          <a
            className="hidden md:block"
            href="https://service-handys.netlify.app/"
          >
            <p>Switch to customer portal</p>
          </a>

          {/* NOTIFICATIONS MODAL */}
          <div className="relative inline-block text-left">
            <div
              onClick={() => setShowNoti(!showNoti)}
              className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-center bg-[#F5F5F5] text-black"
            >
              <Bell
                onClick={() => setShowNoti(!showNoti)}
                size={20}
                className="inline text-center"
              />
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              show={showNoti}
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {/* TODO: ALLOW CLOSE OF NOTIFICATION ONCLICK OUTSIDE OF THE COMPONENT */}
              <div className="absolute right-0 mt-2 p-5 w-96 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Notifications />
              </div>
            </Transition>
          </div>
          {/* END OF NOTIFICATIONS MODAL */}

          <img className="hidden md:block w-10" src={Profile} alt="user" />
        </div>
      </div>
      <div className="text-faintGray">
        <hr />
      </div>
    </div>
  );
}

export default Header;
