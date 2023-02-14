import React from "react";
import Border from "../../../components/Border/Border";

import profile from "../../../assets/sample/jane.png";

function DetailsPane({ showHeader = true, details }) {
  return (
    <div>
      {showHeader && (
        <h3 className="font-semibold text-lg my-4 px-10">Job Details</h3>
      )}

      <div className="flex justify-between px-10 my-5">
        <div className="text-left">
          <h3 className="text-base">Customer Info</h3>
          <p className="text-gray text-sm font-light mt-2">Jane Parker</p>
        </div>
        <div>
          <img className="w-14" src={profile} alt="provider" />
        </div>
      </div>
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Pricing Breakdown</h4>
        <div className="flex justify-between">
          <p className="text-gray text-sm font-light">1st hour</p>
          <p className="text-gray text-sm font-light">$250 CAD</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-gray text-sm font-light">2nd hour</p>
          <p className="text-gray text-sm font-light">$80 CAD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-base font-semibold">Total Price</p>
          <p className="text-black text-base font-semibold">$330 CAD</p>
        </div>
      </div>
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Booking date</h4>

        <p className="text-gray text-sm font-light">January 14, 2023</p>
      </div>
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Your Place</h4>

        <p className="text-gray text-sm font-light">
          Chemin De L' Albatros,Kamloops, qc, Canada
        </p>
      </div>

      <Border />
      <div className="mx-5">
        <button className="w-full btn-primary mb-5">Approve</button>
        <button className="w-full btn-primary-outline">Decline</button>
      </div>
    </div>
  );
}

export default DetailsPane;
