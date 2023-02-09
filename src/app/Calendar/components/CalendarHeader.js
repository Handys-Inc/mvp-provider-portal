import React from "react";
import Border from "../../../components/Border/Border";

function CalendarHeader() {
  return (
    <div>
      <div className="flex justify-between items-center my-5 ">
        <div>
          {/* Date Select */}
          <select className="border border-gray rounded-full">
            <option value="January">January 2023</option>
            <option value="January">February 2023</option>
          </select>

          {/* Month and year Selector */}
        </div>

        <button className="btn-primary">Set availability</button>
      </div>

      <Border />
    </div>
  );
}

export default CalendarHeader;
