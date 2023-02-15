import React from "react";
import Nodata from "./Nodata";

function Upcoming({ data }) {
  return (
    <div className="my-5 mb-20">
      {data.length === 0 ? (
        <Nodata />
      ) : (
        <div className="text-base font-light text-gray">
          <div className="header-pos">
            <div class="header-bar">Name</div>
            <div class="header-bar">Short job description</div>
            <div class="header-bar">Amount</div>
            <div class="header-bar">Booking code</div>
            <div class="header-bar">Date</div>
          </div>

          <div>
            {data.map((single, index) => {
              return (
                <div key="index" className="booking-content">
                  <div class="header-bar">{single.name}</div>
                  <div class="header-bar">{single.desc}</div>
                  <div class="header-bar">${single.amount}</div>
                  <div class="header-bar">{single.code}</div>

                  <div class="header-bar">{single.date}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Upcoming;
