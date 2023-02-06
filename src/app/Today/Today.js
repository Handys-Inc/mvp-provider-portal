import React from "react";
import Layout from "../../components/Layout/Layout";

import "./index.css";
import Bookings from "./Bookings/Bookings";
import HelpLinks from "./components/HelpLinks";
import Resources from "./Resources/Resources";

function Today() {
  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center my-5">
        <h4 className="text-lg md:text-2xl font-bold">Welcome Username,</h4>
        <button className="btn-primary-outline">Edit Job Profile</button>
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
