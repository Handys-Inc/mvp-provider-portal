import React, { useState } from "react";
import Border from "../../../components/Border/Border";

function CalendarHeader({ view, setView, currentFocus, setCurrentFocus }) {
  console.log("current focus", currentFocus);
  return (
    <div>
      <div className="flex justify-between items-center my-5 ">
        <div className="flex gap-10 items-center">
          {/* Date Select */}
          {/* console.log("today", today, format(today, "MMM-yyyy")); */}
          <select
            value={currentFocus}
            onChange={(e) => {
              console.log("settin current focus", e.target.value);
              setCurrentFocus(e.target.value);
            }}
            className="border border-gray rounded-full"
          >
            <option value="Jan-2023">January 2023</option>
            <option value="Feb-2023">February 2023</option>
            <option value="Mar-2023">March 2023</option>
            <option value="Apr-2023">April 2023</option>
            <option value="May-2023">May 2023</option>
            <option value="Jun-2023">June 2023</option>
            <option value="Jul-2023">July 2023</option>
            <option value="Aug-2023">August 2023</option>
            <option value="Sep-2023">September 2023</option>
            <option value="Oct-2023">October 2023</option>
            <option value="Nov-2023">November 2023</option>
            <option value="Dec-2023">December 2023</option>
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
