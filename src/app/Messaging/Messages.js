import React, { useState } from "react";

import Selector from "./components/Selector";
import MessageView from "./components/MessageView";
import DetailsPane from "./components/DetailsPane";
import Layout from "../../components/Layout/Layout";
// import MobileInbox from "./Mobile/MobileInbox";

function Messages() {
  const [details, setDetails] = useState(true);
  return (
    <Layout>
      {/* Mobile Screens */}
      <div className="block md:hidden">{/* <MobileInbox /> */}</div>

      {/* Desktop */}
      {/* Selector Pane */}
      <div className="hidden md:flex h-[88vh] overflow-y-scroll">
        <div className="w-[22rem] border-r border-r-faintGray">
          <Selector />
        </div>
        <div className="flex flex-1">
          <div
            className={`${
              details ? "w-2/3 border-r border-r-faintGray" : "w-full"
            }`}
          >
            <MessageView setDetails={setDetails} details={details} />
          </div>
          <div className={`${details ? "w-1/3" : "hidden w-0"}`}>
            <DetailsPane />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Messages;
