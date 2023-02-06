import React from "react";

import support from "../../../assets/icons/support.svg";

function HelpLinks() {
  return (
    <div className="my-5 mb-10">
      <h4 className="text-lg font-semibold mb-5"> We're here to help</h4>

      <div className="flex justify-between cursor-pointer">
        <div className="border border-faintGray rounded-xl shadow-xl p-5 flex gap-4">
          <img src={support} alt="support" />
          <div>
            <h5 className="text-lg font-bold">
              Get express access to our support team to assist you
            </h5>
            <p className="font-light text-sm">
              As a service provider, you get one-tap access to specially trained
              support team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpLinks;
