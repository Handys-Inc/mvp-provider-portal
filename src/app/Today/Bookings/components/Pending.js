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
                  <div className="twos-split">
                    {" "}
                    <div class="header-bar-content">
                      <p className="desc">Name</p>
                      {single.name}
                    </div>
                    <div class="header-bar-content-more">
                      <p className="desc">Short job description</p>
                      {single.desc}
                    </div>
                  </div>
                  <div className="twos-split">
                    <div class="header-bar-content">
                      <p className="desc">Amount</p>${single.amount}
                    </div>
                    <div class="header-bar-content-more">
                      <p className="desc">Booking Code</p>
                      {single.code}
                    </div>
                  </div>
                  <div className="twos-split">
                    <div class="header-bar-content">
                      <p className="desc">Date</p>
                      {single.date}
                    </div>
                    <div class="header-bar-content md:items-start items-center gap-2 flex">
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
