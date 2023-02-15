import React, { useState } from "react";
import Upcoming from "./components/Upcoming";
import Pending from "./components/Pending";
import Completed from "./components/Completed";

function Bookings() {
  const [view, setView] = useState("upcoming");

  const upcoming = [
    {
      name: "Jane Doe",
      desc: "I want my kitchen painted blue",
      amount: 97.01,
      code: "HA1203Y",
      date: "February 6",
    },
    {
      name: "Jane Doe",
      desc: "I want my kitchen painted blue",
      amount: 97.01,
      code: "HA1203Y",
      date: "February 6",
    },
    {
      name: "Jane Doe",
      desc: "I want my kitchen painted blue",
      amount: 97.01,
      code: "HA1203Y",
      date: "February 6",
    },
  ];
  const pending = [
    {
      name: "Jane Doe",
      desc: "I want my kitchen painted blue",
      amount: 97.01,
      code: "HA1203Y",
      date: "February 6",
    },
  ];

  const completed = [];

  const dynamic = () => {
    switch (view) {
      // CHECKLIST
      case "upcoming":
        return <Upcoming data={upcoming} />;

      case "pending":
        return <Pending data={pending} />;

      case "completed":
        return <Completed data={completed} />;

      default:
        return <Upcoming data={upcoming} />;
    }
  };

  return (
    <div className="my-5">
      <h4 className="text-lg font-semibold mb-4">Your bookings</h4>

      {/* Selector */}
      <div className="booking-scroll-none flex overflow-x-auto space-x-3 w-full">
        <div
          onClick={() => setView("upcoming")}
          className={`${
            view === "upcoming"
              ? " bg-primary text-primary bg-opacity-20"
              : "bg-silent"
          } booking-selector `}
        >
          Upcoming ({upcoming.length})
        </div>
        <div
          onClick={() => setView("pending")}
          className={`${
            view === "pending"
              ? " bg-primary text-primary bg-opacity-20"
              : "bg-silent"
          } booking-selector `}
        >
          Pending Offers ({pending.length})
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

      {/* Show Data */}
      {dynamic()}
    </div>
  );
}

export default Bookings;
