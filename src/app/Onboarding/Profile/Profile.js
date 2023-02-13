import React, { useState } from "react";

import Border from "../../../components/Border/Border";

function Profile({ setStep }) {
  const [booking, setBooking] = useState("instant");

  return (
    <div className="card">
      <h4 className="text-4xl font-semibold mb-5">Job Profile</h4>
      <h5 className="mb-3">I am a: *</h5>
      <div className="flex gap-4 mb-5">
        <div className="pill">Painter</div>
        <div className="pill">Plumber</div>
        <div className="pill">Electrician</div>
        <div className="pill">Cleaner</div>
        <div className="pill">General handy person</div>
      </div>
      <h5 className="mb-3">Experience: *</h5>
      <div className="flex gap-4 mb-5">
        <div className="pill">0-2 years</div>
        <div className="pill">2-5 years</div>
        <div className="pill">5+ years</div>
      </div>

      <h5 className="my-3">Booking</h5>
      <div className="mb-5">
        <form>
          <fieldset>
            {/* Instant booking */}
            <div className="flex gap-2 mb-2 font-light items-center">
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
                  onClick={() => setBooking("reservaion")}
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

      {/* Payouts */}

      {/* BIO */}

      {/* Availability */}

      <div className="card-footer">
        <button onClick={() => setStep(3)} className="btn-primary w-full">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Profile;
