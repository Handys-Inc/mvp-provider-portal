import React from "react";
import DateSelector from "../components/DateSelector";
import NoTransactions from "../components/NoTransactions";

function Gross() {
  return (
    <div className="mt-10">
      <DateSelector />

      {/* data */}

      <NoTransactions />
    </div>
  );
}

export default Gross;
