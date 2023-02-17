import React from "react";
import Layout from "../../components/Layout/Layout";

import "./index.css";
import Bookings from "./Bookings/Bookings";
import HelpLinks from "./components/HelpLinks";
import Resources from "./Resources/Resources";
import { NavLink } from "react-router-dom";

function Today() {
  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center py-5">
        <h4 className="text-2xl font-bold mb-3 md:mb-0">Welcome Username,</h4>
        <NavLink to="/profile">
          <button className="btn-primary-outline">Edit Job Profile</button>
        </NavLink>
      </div>

      {/* Bookings */}
      <Bookings />

      {/* Here to Help */}
      <HelpLinks />

      {/* Resources */}
      <Resources />
    </Layout>
  );
}

export default Today;
