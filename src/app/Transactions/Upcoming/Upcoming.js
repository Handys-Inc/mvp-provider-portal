import React from "react";
import NoTransactions from "../components/NoTransactions";

function Upcoming() {
  return (
    <div className="mt-10">
      {/* Listings */}
      <div className="w-full">
        <select className="border border-faintGray rounded-md w-full">
          <option value="All Listings"> All Listings</option>
        </select>
      </div>

      {/* Pending payouts */}
      <div className="my-5">
        <p className="font-semibold text-lg">
          Pending payouts:{" "}
          <span className="text-lg font-light text-gray">0.00</span>
        </p>
      </div>

      {/* No payouts */}
      <NoTransactions />
    </div>
  );
}

export default Upcoming;
