import React from "react";
import Layout from "../../components/Layout/Layout";

import pro from "../../assets/images/profile.png";

import { FiCheck } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import Border from "../../components/Border/Border";

import "./index.css";

function Profile() {
  return (
    <Layout>
      <div className="mt-20 mb-5 max-w-5xl mx-auto">
        <NavLink to="/account">
          <p className="text-sm underline">Back</p>
        </NavLink>
      </div>
      <div className="flex gap-10 max-w-5xl mx-auto mb-32">
        {/* Account Card */}
        <div className="account-card w-80">
          <img className="w-24 mx-auto" src={pro} alt="profile" />
          <p className="mt-2 underline underline-offset-4 text-center">
            Change photo
          </p>

          <Border />
          <h2 className="text-gray text-lg">Username Confirmed</h2>
          <div>
            <p className="text-gray mt-2">
              <FiCheck className="inline-block" /> Phone Number
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> Email address
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> ID verified
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> Paypal verified
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> Interac verified
            </p>
          </div>
          <p className="mt-32 text-gray text-sm">
            Learn more about how confirming account info helps keep the Handys
            community safe
          </p>
        </div>

        {/* Account Info & Reviews */}
        <div className="flex-1">
          <h2 className="font-bold text-4xl">Username, Painter</h2>
          <p className="my-2 font-light text-gray text-sm">Joined in 2019</p>
          <p className="underline ">Edit Profile</p>

          <Border />
          <h2 className="font-bold text-xl">About</h2>
          <p className="my-2 font-light text-gray text-sm">
            I am a skilled painter with over 10 years of experience in both
            interior and exterior painting. I specialize in residential and
            commercial properties and pride myself on my attention to detail and
            customer satisfaction. I am proficient in various painting
            techniques and able to work with different types of paint. I have my
            own equipment and can provide references.
          </p>
          <Border />
          <h2 className="font-bold text-xl">Per hour rate</h2>
          <p className="my-2 font-light text-gray text-sm">$65</p>
          <Border />
          <h2 className="font-bold text-xl">Booking</h2>
          <p className="my-2 font-light text-gray text-sm">Instant Booking</p>
          <Border/>
           <h2 className="font-bold text-xl">Set availability</h2>
          <p className="my-2 font-light text-gray text-sm">Instant Booking</p>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
