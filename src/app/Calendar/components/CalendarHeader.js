import React, { useState } from "react";
import Border from "../../../components/Border/Border";

function CalendarHeader({ view, setView }) {
  return (
    <div>
      <div className="flex justify-between items-center my-5 ">
        <div className="flex gap-10 items-center">
          {/* Date Select */}
          <select className="border border-gray rounded-full">
            <option value="January">January 2023</option>
            <option value="January">February 2023</option>
          </select>

          {/* Month and year Selector */}
          <div className="rounded-full ">
            <span
              onClick={() => setView("monthly")}
              className={`${
                view === "monthly"
                  ? "bg-primary text-white"
                  : "bg-lightSecondary"
              } rounded-tl-full rounded-bl-full px-4 py-2 cursor-pointer`}
            >
              Monthly
            </span>
            <span
              onClick={() => setView("yearly")}
              className={`${
                view === "yearly"
                  ? "bg-primary text-white"
                  : "bg-lightSecondary"
              } rounded-tr-full rounded-br-full px-4 py-2 cursor-pointer`}
            >
              Yearly
            </span>
          </div>
        </div>

        <button className="btn-primary">Set availability</button>
      </div>

      <Border />
    </div>
  );
}

export default CalendarHeader;
