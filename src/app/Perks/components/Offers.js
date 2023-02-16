import React from "react";

// logos
import quickbooks from "../assets/quickbooks.png";
import bmo from "../assets/bmo.svg";
import ownr from "../assets/owner.png";
import rd from "../assets/rd.png";

function Offers() {
  const offers = [
    {
      image: bmo,
      desc: "Open a BMO business bank account within 60 days of setting up your business.",
      extra: "Learn more",
      redeemLink: "www.google.com",
    },
    {
      image: quickbooks,
      extra: "View offer terms",
      desc: "Get 75% off for 3 months and stay in control of your finances with QuickBooks - the #1 accounting software for small businesses.",
    },
    {
      image: ownr,
      desc: "Start and manage your business online in one. Get 15% off your first business registration",
    },
    {
      image: rd,
      desc: "Get a 20 minute tax consultation with a Chartered Professional Accountant on how to maximize your tax savings",
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
      {offers.map((offer, index) => {
        return (
          <div
            key={index}
            className="offer-card h-[17rem] md:h-[15rem] flex flex-col gap-5"
          >
            <div className="h-1/4 flex justify-start">
              <img className="object-contain" src={offer.image} alt="bmo" />
            </div>
            <div className="h-2/4">
              <p>
                {offer.desc}{" "}
                <span className="underline underline-offset-4 cursor-pointer">
                  {offer.extra}
                </span>
              </p>
            </div>
            <div className="h-1/4">
              <button className="btn-primary-outline">Redeem offer</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Offers;
