import React from 'react'

import { Outlet } from "react-router-dom";

import OnboardHeader from './components/OnboardHeader'

import './index.css'

function OnboardingLayout() {

  const data = {
    consent: true
  }
  return (
    <div className="holder">
      <OnboardHeader />
      <Outlet context={data} />
    </div>
  )
}

export default OnboardingLayout