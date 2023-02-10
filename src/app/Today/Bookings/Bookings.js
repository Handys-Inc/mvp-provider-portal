import React, { useState } from "react";
import Upcoming from "./components/Upcoming";

function Bookings() {
  const [view, setView] = useState("upcoming");

  return (
    <div className="my-5">
      <h4 className="text-lg font-semibold mb-4">Your bookings</h4>

      {/* Selector */}
      <div className="booking-scroll-none flex overflow-x-auto space-x-5 w-full">
        <div
          onClick={() => setView("upcoming")}
          className={`${
            view === "upcoming"
              ? " bg-primary text-primary bg-opacity-20"
              : "bg-silent"
          } booking-selector `}
        >
          Upcoming (0)
        </div>
        <div
          onClick={() => setView("pending")}
          className={`${
            view === "pending"
              ? " bg-primary text-primary bg-opacity-20"
              : "bg-silent"
          } booking-selector `}
        >
          Pending Offers (0)
        </div>
        <div
          onClick={() => setView("completed")}
          className={`${
            view === "completed"
              ? " bg-primary text-primary bg-opacity-20"
              : "bg-silent"
          } booking-selector `}
        >
          Completed (0)
        </div>
      </div>

      {/* Data */}
      <div className="">
        <Upcoming />
      </div>
    </div>
  );
}

export default Bookings;
