import React from "react";
import Layout from "../../components/Layout/Layout";
import CalendarHeader from "./components/CalendarHeader";
import View from "./components/View";

function Calendar() {
  return (
    <Layout>
      <CalendarHeader />

      {/* Calendar here */}
      <View />
    </Layout>
  );
}

export default Calendar;
