import React from "react";

import Layout from "../../../components/Layout/Layout";

import { MdArrowBack } from "react-icons/md";

import { NavLink } from "react-router-dom";
import Border from "../../../components/Border/Border";

function MobileResources() {
  return (
    <Layout current="menu" showHeader={false}>
      <div className="flex flex-col justify-between  w-full i md:hidden">
        <div className="mt-10 w-full">
          <p className="text-left font-bold text-lg">
            {" "}
            <NavLink to="/menu">
              <MdArrowBack className="mr-3 inline" size={24} />
            </NavLink>
            Resources and tips
          </p>
          <Border />
        </div>
        <div className="w-full">
          <p>Resource articles</p>
        </div>
      </div>
    </Layout>
  );
}

export default MobileResources;
