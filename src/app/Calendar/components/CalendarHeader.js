import React, { useState, Fragment } from "react";
import Border from "../../../components/Border/Border";
import { GrClose } from "react-icons/gr";

function CalendarHeader({ view, setView, currentFocus, setCurrentFocus }) {
  const [availabilityView, setAvailabilityView] = useState(false);
  return (
    <div>
      {!availabilityView ? (
        <Fragment>
          <div className="flex justify-between items-center my-5 ">
            <div className="flex gap-10 items-center">
              {/* Date Select */}
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

            <button
              onClick={() => setAvailabilityView(true)}
              className="btn-primary"
            >
              Set availability
            </button>
          </div>
        </Fragment>
      ) : (
        // SET AVAILABILITY HERE
        <div className="flex gap-5 items-center my-5 ">
          <div className="w-1/4">
            <h4 className="text-lg font-semibold">Set availability</h4>
            <p className="font-light text-gray text-sm">
              Select dates or a range for the next 30 days. Unspecified dates
              are auto set to unavailable
            </p>
          </div>

          {/* Date */}
          <button className="btn-dark-outline">Date</button>

          {/* Set Availability */}
          <button className="btn-primary">Set Availability</button>

          {/* Sync Google Calendar */}
          <button className="btn-primary-outline">Sync Google Calendar</button>

          {/* Close */}
          <div>
            <GrClose
              className="bg-mute hover:bg-gray  rounded-full w-7 h-7 cursor-pointer p-2"
              onClick={() => setAvailabilityView(false)}
            />
          </div>
        </div>
      )}
      <Border />
    </div>
  );
}

export default CalendarHeader;
