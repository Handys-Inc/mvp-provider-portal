import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { TbFaceId } from "react-icons/tb";
import { BiBriefcaseAlt } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function List() {
  return (
    <div className="card">
      {/* Intro */}
      <div className="my-5 text-center">
        <h3 className="text-3xl font-semibold">Welcome Username,</h3>
        <p className="text-gray font-light mt-2">
          Complete the required next steps to set up your account
        </p>
        <div className="my-4">
          {/* Legal Requirement */}
          <NavLink to="consent">
            <div className="list-card">
              <div className="flex gap-5 items-center">
                {/* icon */}
                <div className="list-card-icon">
                  <CgFileDocument />
                </div>
                <div className="text-left">
                  <h4>Legal agreeement</h4>
                  <p className="text-primary font-light">Recommended next step</p>
                </div>
              </div>
              <BsArrowRight className="text-gray" size={24} />
            </div>
          </NavLink>


          {/* Job Profile  */}
          <NavLink to="job">    <div className="list-card">
            <div className="flex gap-5 items-center">
              {/* icon */}
              <div className="list-card-icon">
                <FiSettings />
              </div>
              <div className="text-left">
                <h4>Job Profile</h4>
                <p className="text-gray font-light">Get started</p>
              </div>
            </div>
            <BsArrowRight className="text-gray" size={24} />
          </div> </NavLink>


          {/* Profile photo */}
          <NavLink to="profile-photo"> <div className="list-card">
            <div className="flex gap-5 items-center">
              {/* icon */}
              <div className="list-card-icon">
                <RiUserAddLine />
              </div>
              <div className="text-left">
                <h4>Profile photo</h4>
                <p className="text-gray font-light">Get started</p>
              </div>
            </div>
            <BsArrowRight className="text-gray" size={24} />
          </div> </NavLink>


          {/* ID CARD */}
          <NavLink to="id-card">     <div className="list-card">
            <div className="flex gap-5 items-center">
              {/* icon */}
              <div className="list-card-icon">
                <TbFaceId />
              </div>
              <div className="text-left">
                <h4>Upload your ID</h4>
                <p className="text-gray font-light">Get started</p>
              </div>
            </div>
            <BsArrowRight className="text-gray" size={24} />
          </div> </NavLink>


          {/* Insurance */}
          <NavLink to="insurance">   <div className="list-card">
            <div className="flex gap-5 items-center">
              {/* icon */}
              <div className="list-card-icon">
                <IoDocumentTextOutline />
              </div>
              <div className="text-left">
                <h4>Upload your insurance</h4>
                <p className="text-gray font-light">Get started</p>
              </div>
            </div>
            <BsArrowRight className="text-gray" size={24} />
          </div> </NavLink>


          {/* Three photos */}
          <NavLink to="completed-jobs">   <div className="list-card">
            <div className="flex gap-5 items-center">
              {/* icon */}
              <div className="list-card-icon">
                <BiBriefcaseAlt />
              </div>
              <div className="text-left">
                <h4>Three photos of previously completed jobs</h4>
                <p className="text-gray font-light">Get started</p>
              </div>
            </div>
            <BsArrowRight className="text-gray" size={24} />
          </div> </NavLink>


          <button disabled className="w-10/12 mx-auto  px-5 my-5 btn-primary">
            Finish setup
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
