import React from "react";

import Layout from "../../../components/Layout/Layout";

import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

import { NavLink } from "react-router-dom";
import Border from "../../../components/Border/Border";

function MobileHelp() {
  return (
    <Layout current="menu" showHeader={false}>
      <div className="flex flex-col justify-between h-[85vh]  w-full items-end md:hidden">
        <div className="mt-10 w-full">
          <p className="text-left font-bold text-lg">
            {" "}
            <NavLink to="/menu">
              <MdArrowBack className="mr-3 inline" size={24} />
            </NavLink>
            Get help
          </p>
          <Border />
        </div>
        <div className="w-full">
          {/* Account and get help */}
          <div className="flex justify-between py-4 text-lg items-center text-gray">
            <div className="flex gap-3 items-center ">
              <HiOutlineMail size={24} />
              Email live chat
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>

          {/* help */}
          <NavLink to="/m/help">
            <div className="flex justify-between py-4 text-lg items-center text-gray">
              <div className="flex gap-3 items-center ">
                <IoPhonePortraitOutline size={24} />
                Call Us
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
}

export default MobileHelp;
