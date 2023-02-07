import React from "react";
import DateSelector from "../components/DateSelector";
import NoTransactions from "../components/NoTransactions";

function Completed() {
  return (
    <div className="mt-10">
      {/* Date picker */}
      <DateSelector />

      {/* data */}
      <NoTransactions />
    </div>
  );
}

export default Completed;
