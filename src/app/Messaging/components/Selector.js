import React from "react";
import RawBorder from "../../../components/Border/RawBorder";

import profile from "../../../assets/images/profile.png";
import john from '../../../assets/sample/john.png'
import jane from '../../../assets/sample/jane.png'
import shiela from '../../../assets/sample/shiela.png'

function Selector() {
  return (
    <div className="h-[88vh] overflow-y-scroll">
      <div className="h-16 flex items-center">
        <h3 className="font-bold text-xl place-self-center md:ml-10">
          All Messages
        </h3>
      </div>
      <RawBorder />

      {/* Message selected */}
      <div className="flex gap-5 p-3cursor-pointer mb-5 rounded-2xl m-1 mt-4">
        <div>
          <img className="w-24" src={john} alt="provider" />
        </div>
        <div className="text-left">
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Booking Completed
          </div>
          <h3 className="font-bold text-xl">Mark Anthony</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex gap-5 p-3  cursor-pointer mb-5 rounded-2xl m-1">
        <div>
          <img className="w-24" src={profile} alt="provider" />
        </div>
        <div className="text-left">
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Past Customer
          </div>
          <h3 className="font-bold text-xl">Wilson Whyte</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex gap-5 p-3  cursor-pointer mb-5 rounded-2xl m-1">
        <div>
          <img className="w-24" src={shiela} alt="provider" />
        </div>
        <div className="text-left">
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Past Customer
          </div>
          <h3 className="font-bold text-xl">Barbara Hagan</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
        </div>
      </div>

      {/* 4 */}
         <div className="flex gap-5 p-3  cursor-pointer mb-5 rounded-2xl m-1">
        <div>
          <img className="w-24" src={jane} alt="provider" />
        </div>
        <div className="text-left">
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
        Enquiry
          </div>
          <h3 className="font-bold text-xl">Shiela Forson</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
        </div>
      </div>

      <RawBorder />
    </div>
  );
}

export default Selector;
