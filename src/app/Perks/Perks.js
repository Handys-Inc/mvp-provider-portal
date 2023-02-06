import React from "react";
import Layout from "../../components/Layout/Layout";

import gifts from "./assets/gifts.svg";
import Offers from "./components/Offers";

import "./index.css";

function Perks() {
  return (
    <Layout>
      <div className="flex justify-between my-5 items-center mb-10">
        <div className="flex-1">
          <h2 className="text-primary text-6xl font-bold">
            Signing up with <br /> Handys has its benefits
          </h2>
          <p className="mt-4 font-light text-gray text-2xl">
            Unlock valuable exclusive offers for your business with a
            significant potential benefit
          </p>
        </div>
        {/* image */}
        <div className="flex-1">
          <img className="w-3/5 mx-auto" src={gifts} alt="gifts" />
        </div>
      </div>

      {/* Offers */}
      <Offers />
    </Layout>
  );
}

export default Perks;
