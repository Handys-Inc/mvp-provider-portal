import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./app/Today/Today";

// notfound
import NotFound from "./app/NotFound/NotFound";
import Perks from "./app/Perks/Perks";
import Transactions from "./app/Transactions/Transactions";
import Menu from "./app/Menu/Menu";
import MobileHelp from "./app/Menu/MobileHelp/MobileHelp";
import MobileResources from "./app/Menu/MobileResources/MobileResources";
import Messages from "./app/Messaging/Messages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General Routes */}
        <Route path="/" exact element={<Today />} />
        <Route path="/perks" exact element={<Perks />} />
        <Route path="/transactions" exact element={<Transactions />} />
        <Route path="/inbox" exact element={<Messages />} />

        {/* mobile specific */}
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/m/help" exact element={<MobileHelp />} />
        <Route path="/m/resources" exact element={<MobileResources />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
