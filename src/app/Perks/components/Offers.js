import React from "react";

// logos
import quickbooks from "../assets/quickbooks.png";
import bmo from "../assets/bmo.svg";
import ownr from "../assets/owner.png";
import rd from "../assets/rd.png";

function Offers() {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
      {/* Quickbooks */}
      <div className="offer-card">
        <img src={quickbooks} alt="quickbooks" />
        <p>
          Get 75% off for 3 months and stay in control of your finances with
          QuickBooks - the #1 accounting software for small businesses. View
          Offer Terms
        </p>
        <button className="btn-primary-outline">Redeem offer</button>
      </div>

      {/* BMO */}
      <div className="offer-card">
        <img className="w-32 mb-4" src={bmo} alt="bmo" />
        <p>
          Open a BMO business bank account within 60 days of setting up your
          business. Learn more
        </p>
        <button className="btn-primary-outline">Redeem offer</button>
      </div>

      {/* Ownr */}
      <div className="offer-card">
        <img src={ownr} alt="Ownr" />
        <p>
          Start and manage your business online in one. Get 15% off your first
          business registration
        </p>
        <button className="btn-primary-outline">Redeem offer</button>
      </div>

      {/* RD */}
      <div className="offer-card">
        <div className="offer-card-img">
          <img className="w-20 mb-4" src={rd} alt="RD" />
        </div>
        <p>
          Get a 20 minute tax consultation with a Chartered Professional
          Accountant on how to maximize your tax savings
        </p>
        <button className="btn-primary-outline">Redeem offer</button>
      </div>
    </div>
  );
}

export default Offers;
