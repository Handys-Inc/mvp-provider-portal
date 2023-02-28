import React, { useState } from "react";


import { MdArrowBack } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

function Interac() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  return (
    <React.Fragment>


      <div className="card">
        {" "}
        <div className="w-full md:max-w-xl mx-auto mt-5">
          <h2 className="text-2xl md:text-3xl font-medium">
            Please type in your Interac email
          </h2>
          <p className="text-normal font-mute mt-2">
            We recomment you set up auto-deposit
          </p>

          <form className="my-5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="form-input"
            />
          </form>

          {/* Back and confirm */}
          <div className="flex justify-between my-5">
            <div>

              <button onClick={() => navigate(-1)} className="btn-primary-outline">
                <MdArrowBack className="mr-1 inline" size={24} /> Back
              </button>

            </div>

            <button disabled={email === null} className="btn-primary">
              Continue
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Interac;
