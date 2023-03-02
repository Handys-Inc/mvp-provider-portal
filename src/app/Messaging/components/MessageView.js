import React from "react";

import RawBorder from "../../../components/Border/RawBorder";

import profile from "../../../assets/images/profile.png";

import { BsArrowUp } from "react-icons/bs";

import { IoImage } from "react-icons/io5";

function MessageView({ setDetails, details }) {
  return (
    <div className="relative h-[88vh]  overflow-y-none">
      {/* Header for who it is and onine status */}
      <div className="h-16 flex justify-between items-center">
        <div>
          {" "}
          <h3 className="font-bold text-lg place-self-center ml-10">
            Barbara Forson
            <span className="block text-xs text-green-600">Online</span>
          </h3>
        </div>
        <div className="mr-5">
          <button
            onClick={() => setDetails(!details)}
            className="btn-dark-outline-sm"
          >
            {details ? "Hide " : "Show "}
            Details
          </button>
        </div>
      </div>

      <RawBorder />

      {/* Actual Messages */}
      <div className=" h-[68vh] overflow-y-scroll w-full text-center mt-5">
        <p>January 13</p>

        {/* Message Item */}
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-start px-10 my-5">
          <div className="">
            <img className="w-14" src={profile} alt="provider" />
          </div>
          <div className="text-left w-3/5">
            <h3 className="font-semibold text-base">
              Jane <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              Hello, I’d like to book your services for a few hours
            </p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="absolute bottom-4 w-11/12 bg-white flex gap-4 items-center md:mx-5">
        <div className="rounded-full flex items-center justify-center bg-faintGray w-10 h-10">
          <IoImage />
        </div>
        <div className="border border-gray w-full text-left flex justify-between pl-4 pr-2 rounded-full py-1">
          <input className="appearance-none" placeholder="Message Jane" />
          <div className="bg-primary h-10 w-10 flex items-center justify-center rounded-full text-white">
            <BsArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageView;
//
