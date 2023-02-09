import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import CalendarHeader from "./components/CalendarHeader";
import View from "./components/View";

import { startOfToday, format } from "date-fns";

function Calendar() {
  const [view, setView] = useState("monthly");
  const [currentFocus, setCurrentFocus] = useState(
    format(startOfToday(), "MMM-yyyy")
  );

  return (
    <Layout>
      <CalendarHeader
        currentFocus={currentFocus}
        setCurrentFocus={setCurrentFocus}
        view={view}
        setView={setView}
      />

      {/* Calendar here */}
      <View currentFocus={currentFocus} view={view} />
    </Layout>
  );
}

export default Calendar;
