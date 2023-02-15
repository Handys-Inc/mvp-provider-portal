import React from "react";

import Nodata from "./Nodata";

import { BiCheck } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function Pending({ data }) {
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
            <div class="header-bar">Action</div>
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
                  <div class="header-bar flex gap-2">
                    <BiCheck
                      size={25}
                      className="text-[#118431] cursor-pointer"
                    />
                    <IoMdClose
                      size={22}
                      className="text-[#E80202] cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pending;
