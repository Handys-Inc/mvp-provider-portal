import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

import pro from "../../assets/images/profile.png";

import { FiCheck, FiEdit2 } from "react-icons/fi";

import Border from "../../components/Border/Border";

import Modal from "../../components/Modal/Modal";

import "./index.css";
import JobProfile from "../Onboarding/JobProfile/JobProfile";

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <Layout>
      <div className="flex mt-10 gap-10 max-w-6xl mx-auto mb-32">
        {/* Account Card */}
        <div className="account-card w-80">
          <img className="w-24 mx-auto" src={pro} alt="profile" />

          <Border />
          <h2 className="text-black font-semibold text-lg">
            Username Confirmed
          </h2>
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
          <p className="mt-20 text-gray text-sm">
            Learn more about how confirming account info helps keep the Handys
            community safe
          </p>
        </div>

        {/* Account Info & Reviews */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-4xl">Username, Painter</h2>
              <p className="my-2 font-light text-gray text-base">
                2-5 years experience
              </p>
              <p className="my-2 font-light text-gray text-sm">
                Joined in 2019
              </p>
            </div>
            <div>
              <p
                onClick={() => setShowEditModal(true)}
                className="underline underline-offset-4 hover:text-primary cursor-pointer "
              >
                Edit Profile
              </p>
            </div>
          </div>

          <Border />
          <h2 className="font-bold text-xl">About</h2>
          <p className="my-2 font-light text-gray text-base">
            I am a skilled painter with over 10 years of experience in both
            interior and exterior painting. I specialize in residential and
            commercial properties and pride myself on my attention to detail and
            customer satisfaction. I am proficient in various painting
            techniques and able to work with different types of paint. I have my
            own equipment and can provide references.
          </p>
          <Border />
          <h2 className="font-bold text-xl">Per hour rate</h2>
          <p className="my-2 font-light text-gray text-base">$65</p>
          <Border />
          <h2 className="font-bold text-xl">Booking</h2>
          <p className="my-2 font-light text-gray text-base">Instant Booking</p>
          <Border />
          <h2 className="font-bold text-xl">Set availability</h2>
          <div className="mt-5 items-center flex gap-4">
            <span className="rounded-full text-sm bg-lightGray py-2 px-4">
              Jan 6, 2023 - March 6, 2023
            </span>
            <FiEdit2 className="text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        title="Edit Profile"
        isOpen={showEditModal}
        setIsOpen={setShowEditModal}
      >
        <JobProfile setExistingModal={setShowEditModal} />
      </Modal>
    </Layout>
  );
}

export default Profile;
