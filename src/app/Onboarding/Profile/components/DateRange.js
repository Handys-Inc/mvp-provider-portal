import React, { useState } from "react";

import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

import './index.css'

function DateRange() {
  // date
  const [selected, setSelected] = useState(new Date());
  return (
    <DayPicker
      className="text-sm mx-auto inline-block"
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={setSelected}
    />
  );
}

export default DateRange;
