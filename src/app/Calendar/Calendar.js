import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import CalendarHeader from "./components/CalendarHeader";
import View from "./components/View";

function Calendar() {
  const [view, setView] = useState("monthly");

  return (
    <Layout>
      <CalendarHeader view={view} setView={setView} />

      {/* Calendar here */}
      <View view={view} />
    </Layout>
  );
}

export default Calendar;
