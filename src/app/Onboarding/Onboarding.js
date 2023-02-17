import React, { useEffect, useState } from "react";

import OnboardHeader from "./components/OnboardHeader";

// Steps
import List from "./CheckList/List";
import Consent from "./Consent/Consent";
import JobProfile from "./JobProfile/JobProfile";
import Work from "./Work/Work";
import IDCard from "./IDCard/IDCard";
import PersonalPhoto from "./PersonalPhoto/PersonalPhoto";

import "./index.css";
import Insurance from "./Insurance/Insurance";

function Onboarding() {
  const [step, setStep] = useState(0);

  // Getting current position
  const position = window.location.search;
  const arrSplit = position.split("=")[1];

  useEffect(() => {
    if (parseInt(arrSplit)) {
      setStep(parseInt(arrSplit));
    }
  }, [arrSplit]);

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
          <JobProfile setStep={setStep} />
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

    // 5 | Insurance
    case 5:
      return (
        <div className="holder">
          <OnboardHeader />
          <Insurance setStep={setStep} />
        </div>
      );

    // 6 | THREE PHOTOS OF WORK
    case 6:
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
