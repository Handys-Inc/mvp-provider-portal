import React from "react";

function DateSelector() {
  return (
    <div className="my-5 flex flex-col md:flex-row items-center gap-5">
      {/* From */}
      <div className="w-full md:w-1/2 flex gap-3">
        <div class="w-2/3 flex items-center border border-faintGray rounded-md ">
          <span class="prefix ml-3">From</span>
          <select className="form-input border-none outline-none">
              <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June3">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="Octover">October</option>
            <option value="Novovember">November</option>
            <option value="December">December</option>
          </select>
        </div>
        {/* YEAR Selector */}
        <div className="w-1/3 border-faintGray flex items-center justify-center text-center rounded-md border">
          <select className="form-input border-none outline-none">
            <option value="2023"> 2023</option>
            <option value="2024"> 2024</option>
            <option value="2025"> 2025</option>
            <option value="2025"> 2026</option>
          </select>
        </div>
      </div>

      {/* To */}
      <div className="w-full md:w-1/2 flex gap-3">
        <div class="w-2/3 flex items-center border border-faintGray rounded-md">
          <span class="prefix ml-3">To</span>
          <select className="form-input border-none outline-none">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June3">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="Octover">October</option>
            <option value="Novovember">November</option>
            <option value="December">December</option>
          </select>
        </div>
        {/* YEAR Selector */}
        <div className="w-1/3 border-faintGray flex items-center justify-center text-center rounded-md border">
          <select className="form-input border-none outline-none">
            <option value="2023"> 2023</option>
            <option value="2024"> 2024</option>
            <option value="2025"> 2025</option>
            <option value="2025"> 2026</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
