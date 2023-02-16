import React, { useState } from "react";

import Border from "../../../components/Border/Border";

import { IoIosArrowForward } from "react-icons/io";

import Modal from "../../../components/Modal/Modal";

import interac from "../../../assets/logo/interac.png";
import paypal from "../../../assets/logo/paypal.png";
import { NavLink } from "react-router-dom";
import DateRange from "./components/DateRange";

import { FiEdit2 } from "react-icons/fi";

function JobProfile({ setStep }) {
  const [booking, setBooking] = useState("instant");

  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="card">
      <h4 className="text-3xl font-semibold mb-5">Job profile</h4>
      {/* JOB Selection */}
      <h5 className="mb-3 text-lg">
        I am a:<span className="asterisk">*</span>
      </h5>
      <div className="booking-scroll-none flex flex-nowrap overflow-x-auto space-x-3 w-full">
        <div>
          <p className="pill">Painter</p>
        </div>
        <div>
          <p className="pill">Plumber</p>
        </div>
        <div>
          <p className="pill">Electrician</p>
        </div>
        <div>
          <p className="pill">Cleaner</p>
        </div>
        <div>
          <p className="pill w-48">General handy person</p>
        </div>
      </div>
      {/* Experience */}
      <h5 className="mb-3 text-lg">
        Experience: <span className="asterisk">*</span>
      </h5>
      <div className="flex gap-4 mb-5">
        <div className="pill">0-2 years</div>
        <div className="pill">2-5 years</div>
        <div className="pill">5+ years</div>
      </div>

      {/* Booking */}
      <h5 className="my-3">Booking</h5>
      <div className="mb-5">
        <form>
          <fieldset>
            {/* Instant booking */}
            <div className="flex gap-2 mb-2 items-center">
              <div className="">
                <input
                  checked={booking === "instant"}
                  onClick={() => setBooking("instant")}
                  type="radio"
                  className=""
                />
              </div>
              <p>Instant Booking</p>
            </div>
            {/* Reservation request */}
            <div className="flex gap-2 items-center">
              <div className="">
                <input
                  checked={booking === "reservation"}
                  onClick={() => setBooking("reservation")}
                  type="radio"
                  className=""
                />
              </div>
              <p>All clients must send a reservation request</p>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Per hour rate */}
      <h5 className="my-3 text-lg">
        Set per hour rate <span className="asterisk">*</span>
      </h5>
      <div className="flex bg-mute  items-center divide-x divide-x-mute border rounded-lg border-mute">
        <div className="bg-mute text-gray px-3 h-full">CAD</div>
        <input
          min="0"
          type="number"
          placeholder="Eg. 500"
          className="form-input"
        />
      </div>

      {/* Payouts */}
      <h5 className="mt-10 my-3 text-lg">Setup payouts</h5>
      <NavLink to="/onboarding/paypal">
        <div className="flex justify-between px-5 items-center">
          <div className="flex gap-10">
            <div>
              <img src={paypal} alt="interac" />
            </div>

            <div>
              {" "}
              <h3 className="font-bold text-sm -ml-5">Paypal in CAD</h3>
              <ul>
                <li className="list-disc">One business day</li>
                <li className="list-disc">Paypal fees may apply</li>
              </ul>
            </div>
          </div>
          <IoIosArrowForward />
        </div>
      </NavLink>

      <Border />
      {/* INTERAC */}
      <NavLink to="/onboarding/interac">
        <div className="flex justify-between px-5 items-center">
          <div className="flex gap-10">
            <div>
              <img src={interac} alt="interac" />
            </div>

            <div>
              {" "}
              <h3 className="font-bold text-sm -ml-5">Interac</h3>
              <ul>
                <li className="list-disc">One business day</li>
                <li className="list-disc">No fees</li>
              </ul>
            </div>
          </div>
          <IoIosArrowForward />
        </div>
      </NavLink>

      {/* BIO */}
      <h5 className="my-3 mt-5 text-lg">Bio</h5>
      <textarea
        className="w-full rounded-lg border border-gray"
        rows="5"
        placeholder="Any other thing you would like to add"
      />

      {/* Availability */}
      <h5 className="my-3 mt-5 text-lg">
        Set availability<span className="asterisk">*</span>
      </h5>
      <div className="mb-10 items-center flex gap-4">
        <span className="rounded-full bg-mute py-2 px-4">
          Jan 6, 2023 - March 6, 2023
        </span>
        <FiEdit2
          onClick={() => setShowPicker(true)}
          className="text-primary cursor-pointer"
        />
      </div>

      {/* Continue */}
      <div className="card-footer">
        <button onClick={() => setStep(3)} className="btn-primary w-full">
          Continue
        </button>
      </div>

      {/* Availability Modal */}
      <Modal
        title="Pick a date or date range"
        isOpen={showPicker}
        setIsOpen={setShowPicker}
      >
        <DateRange />
      </Modal>
    </div>
  );
}

export default JobProfile;
