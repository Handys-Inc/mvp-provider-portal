import React, { useState } from "react";

import OnboardHeader from "./components/OnboardHeader";

// Steps
import List from "./CheckList/List";
import Consent from "./Consent/Consent";
import Profile from "./Profile/Profile";
import Work from "./Work/Work";
import IDCard from "./IDCard/IDCard";
import PersonalPhoto from "./PersonalPhoto/PersonalPhoto";

import "./index.css";

function Onboarding() {
  const [step, setStep] = useState(0);

  switch (step) {
    // CHECKLIST
    case 0:
      return (
        <div className="holder">
          <OnboardHeader />
          <List setStep={setStep} />
        </div>
      );

    // 1 | LEGAL CONCENT
    case 1:
      return (
        <div className="holder">
          <OnboardHeader />
          <Consent setStep={setStep} />
        </div>
      );

    // 2 | JOB PROFILE
    case 2:
      return (
        <div className="holder">
          <OnboardHeader />
          <Profile setStep={setStep} />
        </div>
      );

    // 3| PROFILE PHOTO
    case 3:
      return (
        <div className="holder">
          <OnboardHeader />
          <PersonalPhoto setStep={setStep} />
        </div>
      );

    // 4 | ID CARD
    case 4:
      return (
        <div className="holder">
          <OnboardHeader />
          <IDCard setStep={setStep} />
        </div>
      );

    // 5 | THREE PHOTOS OF WORK
    case 5:
      return (
        <div className="holder">
          <OnboardHeader />
          <Work setStep={setStep} />
        </div>
      );

    default:
      return (
        <div className="holder">
          <OnboardHeader />
          <List setStep={setStep} />
        </div>
      );
  }
}

export default Onboarding;
