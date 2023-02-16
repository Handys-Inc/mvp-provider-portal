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
import Calendar from "./app/Calendar/Calendar";
import Onboarding from "./app/Onboarding/Onboarding";
import Interac from "./app/Onboarding/Payouts/Interac";
import Paypal from "./app/Onboarding/Payouts/Paypal";
import Profile from "./app/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General Routes */}
        <Route path="/" exact element={<Today />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/perks" exact element={<Perks />} />
        <Route path="/transactions" exact element={<Transactions />} />
        <Route path="/inbox" exact element={<Messages />} />
        <Route path="/calendar" exact element={<Calendar />} />

        {/* onboarding */}
        <Route path="/onboarding" exact element={<Onboarding />} />
        <Route path="/onboarding/interac" exact element={<Interac />} />
        <Route path="/onboarding/paypal" exact element={<Paypal />} />

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
