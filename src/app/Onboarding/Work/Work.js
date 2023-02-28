import React, { useState } from "react";

import { IoIosCloseCircle } from "react-icons/io";
import Foot from "../components/Foot";

function Work() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  return (
    <div className="card">
      <h4 className="text-3xl font-semibold mb-5">
        Add three photos of previously completed jobs
      </h4>
      <p>
        These photos will help customers get a sense of your work and make it
        more likely for them to choose you for their project.
      </p>
      <p className="my-5 text-gray font-light">
        1. Choose high-quality photos that clearly show the work you completed
        <br />
        2. Make sure the photo is well lit, free of glare, and in focus <br />
        3. No photos of a photo, filters, or alterations
      </p>

      {/* PHOTOS */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* FIRST IMAGE */}
        {first === null ? (
          <label className="job-card">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setFirst(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div>+</div>
          </label>
        ) : (
          // show preview of front
          <div className="job-card">
            <IoIosCloseCircle
              onClick={() => setFirst(null)}
              className="upload-remove"
              size={24}
            />
            <img
              className="object-contain p-2 w-full h-full"
              src={first}
              alt="front"
            />
          </div>
        )}

        {/* SECOND IMAGE */}
        {second === null ? (
          <label className="job-card">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setSecond(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div>+</div>
          </label>
        ) : (
          // show preview of front
          <div className="job-card">
            <IoIosCloseCircle
              onClick={() => setSecond(null)}
              className="upload-remove"
              size={24}
            />
            <img
              className="object-contain p-2 w-full h-full"
              src={second}
              alt="second"
            />
          </div>
        )}
        {/* THIRD IMAGE */}
        {third === null ? (
          <label className="job-card">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setThird(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div>+</div>
          </label>
        ) : (
          // show preview of third image
          <div className="job-card">
            <IoIosCloseCircle
              onClick={() => setThird(null)}
              className="upload-remove"
              size={24}
            />
            <img
              className="object-contain p-2 w-full h-full"
              src={third}
              alt="third"
            />
          </div>
        )}
      </div>

      <Foot next="" format="single" />
    </div>
  );
}

export default Work;
