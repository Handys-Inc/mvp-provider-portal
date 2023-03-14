import axios from "axios";

// local service
import { getToken, getId } from "../local/localService";

// USER API
const baseURL = `${process.env.REACT_APP_BASE_URL}/api/service-providers`;

const headers = {
  "x-auth-token": getToken(),
  "Content-Type": "application/json",
};


// ONBOARDING

export const legalAgreement = () => {
  return axios({
    method: "POST",
    url: `${baseURL}/onboarding/legal-agreement`,
    headers: headers,
  });
};

export const jobProfile = () => {
  let data = JSON.stringify({
    serviceType: "Painter",
    experience: {
        "upper": 5,
        "lower": 2
    },
    bookingType: "instant",
    rate: 25,
    bio: "A hardworker",
    availability: {
        start: "10-01-23",
        end: null
    }
})
  return axios({
    method: "POST",
    url: `${baseURL}/onboarding/job-profile`,
    data,
    headers: headers,
  });
};