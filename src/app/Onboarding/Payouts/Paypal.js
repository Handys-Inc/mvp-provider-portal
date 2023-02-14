import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";

import Modal from "../../../components/Modal/Modal";

import Border from "../../../components/Border/Border";

import Verify from "./components/Verify";
import ExistingAccount from "./components/ExistingAccount";
import OnboardHeader from "../components/OnboardHeader";

function Paypal() {
  const [owner, setOwner] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [businessName, setBusinessName] = useState(null);

  //
  const [existingModal, setExistingModal] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  return (
    <div className="holder">
      <OnboardHeader />
      <div className="card">
        <h2 className="text-3xl font-medium">Who owns this Paypal account?</h2>
        <p className="text-normal text-gray mt-2">
          This is the name that will be associated with your Paypal account
        </p>

        <form className="my-5">
          <p className="mb-2">Whose account is this?</p>
          <select
            onChange={(e) => setOwner(e.target.value)}
            placeholder="Email address"
            className="form-input"
          >
            <option value={null}>Select Account holder</option>
            <option value="Iris">Alice Iris</option>
            <option value="new">New account holder</option>
          </select>
        </form>

        {/* New Account Holder */}
        {owner === "new" && (
          <div>
            <p className="mb-3 font-semibold text-gray text-base">
              {" "}
              Type of bank account{" "}
            </p>

            {/* Paypal account type */}
            <div className="mb-5 mt-2">
              <form>
                <fieldset>
                  <div className="flex gap-2 items-center">
                    <input
                      checked={accountType === "personal"}
                      onClick={() => setAccountType("personal")}
                      type="radio"
                    />
                    <p>Personal</p>
                  </div>
                  <div className="flex gap-2 items-center mt-3">
                    <input
                      checked={accountType === "business"}
                      onClick={() => setAccountType("business")}
                      type="radio"
                    />
                    <p>Business</p>
                  </div>
                </fieldset>
              </form>
            </div>

            <p className="mb-3 font-semibold text-gray text-base">
              Account holder{" "}
            </p>

            {accountType === "personal" && (
              <div className="border rounded-2xl border-mute py-2">
                <input
                  className="w-full px-5 border-transparent focus:border-transparent focus:ring-0"
                  type="text"
                  placeholder="First name"
                />

                <Border />
                <input
                  className="w-full px-5 border-transparent focus:border-transparent focus:ring-0"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            )}

            {accountType === "business" && (
              <input
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Business name"
                className="form-input"
              />
            )}

            <p className="my-5 text-xs text-gray">
              Enter the account holder’s name exactly as it appears on bank
              statements
            </p>
          </div>
        )}

        {/* Back and confirm */}
        <div className="flex justify-between my-5">
          <div>
            <NavLink to="/onboarding?step=2">
              <button className="btn-primary-outline">
                <MdArrowBack className="mr-1 inline" size={24} /> Back
              </button>
            </NavLink>
          </div>

          <button disabled={owner === null} className="btn-primary">
            {accountType != null && owner === "new" ? (
              <p>
                {" "}
                <HiLockClosed className="mr-2 inline" /> Continue to Paypal
              </p>
            ) : (
              <p onClick={() => setExistingModal(true)}>
                Continue <MdArrowForward className="ml-1 inline" size={24} />
              </p>
            )}
          </button>
        </div>
      </div>

      {/* Confirm account */}
      <Modal
        title="Confirm account"
        isOpen={existingModal}
        setIsOpen={setExistingModal}
      >
        <ExistingAccount
          setExistingModal={setExistingModal}
          setVerifyModal={setVerifyModal}
        />
      </Modal>

      {/* Verify OTP */}
      <Modal title="" isOpen={verifyModal} setIsOpen={setVerifyModal}>
        <Verify />
      </Modal>
    </div>
  );
}

export default Paypal;
