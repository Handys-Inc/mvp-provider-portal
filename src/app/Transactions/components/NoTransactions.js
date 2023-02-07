import React from "react";

function NoTransactions() {
  return (
    <div className="border border-faintGray my-2 rounded-xl shadow-lg p-5 flex gap-5">
      <div>
        <h4 className="text-lg text-gray font-semibold">
          You have not received any payouts
        </h4>
        <p className="text-gray text-sm font-light">
          For the dates, listings and the payout method currently selected
        </p>
      </div>
    </div>
  );
}

export default NoTransactions;
