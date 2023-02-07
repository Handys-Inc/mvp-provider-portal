import React from "react";

function DateSelector() {
  return (
    <div className="my-5 flex items-center gap-5">
      {/* From */}
      <div className="w-1/2 flex gap-3">
        <div class="w-2/3 flex items-center border border-faintGray rounded-md ">
          <span class="prefix ml-3">From</span>
          <select className="form-input border-none outline-none">
            <option value="January"> January</option>
            <option value="January"> February</option>
            <option value="January"> March</option>
          </select>
        </div>
        <div className="w-1/3 border-faintGray flex items-center justify-center text-center rounded-md border">
          08
        </div>
      </div>

      {/* To */}
      <div className="w-1/2 flex gap-3">
        <div class="w-2/3 flex items-center border border-faintGray rounded-md">
          <span class="prefix ml-3">To</span>
          <select className="form-input border-none outline-none">
            <option value="January"> February</option>
            <option value="January"> March</option>
          </select>
        </div>
        <div className="w-1/3 border-faintGray flex items-center justify-center text-center rounded-md border">
          11
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
