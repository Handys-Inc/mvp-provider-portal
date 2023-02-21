import React from "react";
import Layout from "../../components/Layout/Layout";

// navlink
import { NavLink } from "react-router-dom";
import { TbClipboardText } from "react-icons/tb";

import { IoIosArrowForward } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";

function Menu() {
  return (
    <Layout>
      <div className="flex flex-col justify-between h-[95%]  w-full items-end md:hidden">
        <div className="w-full">
          <p className="text-left font-bold text-2xl">Menu</p>
        </div>
        <div className="w-full">
          {/* help */}
          <NavLink to="/m/help">
            <div className="flex justify-between py-4 text-lg items-center text-gray">
              <div className="flex gap-3 items-center ">
                <FiHelpCircle size={24} />
                Get Help
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>

          {/* Account and get help */}
          <NavLink to="/m/resources">
            <div className="flex justify-between py-4 text-lg items-center text-gray">
              <div className="flex gap-3 items-center ">
                <TbClipboardText size={24} />
                Explore resources and tips
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>

          {/* Perks */}
          <NavLink to="/perks">
            <div className="flex justify-between py-4 text-lg items-center text-gray">
              <div className="flex gap-3 items-center ">
                <IoGiftOutline size={24} />
                Perks
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>

          <a href="https://customer-handys.netlify.app/">
            <button className="btn-primary-outline w-full mb-3">
              Switch to get service
            </button>
          </a>

          <button className="btn-primary w-full mb-3">Log Out</button>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
