import React, {useEffect} from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./app/Today/Today";

// notfound
import NotFound from "./app/NotFound/NotFound";

// protected route
import {ProtectedRoutes} from './routes/ProtectedRoutes'


// components
import Perks from "./app/Perks/Perks";
import Transactions from "./app/Transactions/Transactions";
import Menu from "./app/Menu/Menu";
import MobileHelp from "./app/Menu/MobileHelp/MobileHelp";
import MobileResources from "./app/Menu/MobileResources/MobileResources";
import Messages from "./app/Messaging/Messages";
import Calendar from "./app/Calendar/Calendar";

// contexts
import AuthContextProvider from "./contexts/AuthContext";
import { CookiesProvider } from "react-cookie";

// onboarding routes
import Interac from "./app/Onboarding/Payouts/Interac";
import Paypal from "./app/Onboarding/Payouts/Paypal";
import Profile from "./app/Profile/Profile";
import OnboardingLayout from "./app/Onboarding/OnboardingLayout";
import List from "./app/Onboarding/CheckList/List";
import Consent from './app/Onboarding/Consent/Consent'
import JobProfile from "./app/Onboarding/JobProfile/JobProfile";
import PersonalPhoto from "./app/Onboarding/PersonalPhoto/PersonalPhoto";
import IDCard from "./app/Onboarding/IDCard/IDCard";
import Insurance from "./app/Onboarding/Insurance/Insurance";
import Work from "./app/Onboarding/Work/Work";

function App() {
    const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000)); // 2 seconds
  };

  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }, []);

  return (
    <BrowserRouter>
         <CookiesProvider>
          <AuthContextProvider>
      <Routes>
         <Route element={<ProtectedRoutes/>} >

       
        {/*General Routes */}
        <Route path="/" exact element={<Today />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/perks" exact element={<Perks />} />
        <Route path="/transactions" exact element={<Transactions />} />
        <Route path="/inbox" exact element={<Messages />} />
        <Route path="/calendar" exact element={<Calendar />} />

        {/* onboarding */}
        <Route path="/onboarding" element={<OnboardingLayout />}>
          <Route index element={<List />} />

          {/* Payments*/}
          <Route path="interac" element={<Interac />} />
          <Route path="paypal" element={<Paypal />} />


          <Route path="consent" element={<Consent />} />
          <Route path="job" element={<JobProfile />} />
          <Route path="profile-photo" element={<PersonalPhoto />} />
          <Route path="id-card" element={<IDCard />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="completed-jobs" element={<Work />} />
          {/* <Route path="provider/#legal" element={<ProviderCategory />} /> */}
        </Route>


        {/* mobile specific */}
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/m/help" exact element={<MobileHelp />} />
        <Route path="/m/resources" exact element={<MobileResources />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<NotFound />} />
          </Route>
      </Routes>
           </AuthContextProvider>
          </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
