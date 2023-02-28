import React, { useState } from "react";
import Foot from "../components/Foot";

import { IoIosCloseCircle } from "react-icons/io";

function Insurance() {

  const [insurance, setInsurance] = useState(null)
  return (
    <div className="card">
      <h4 className="text-xl md:text-3xl font-semibold mb-5">
        Upload photos of your insurance
      </h4>
      <p>Upload png, jpg or pdf. Make sure your photos aren’t blurry.</p>
      <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-5">
        {/* insurance */}

        {insurance === null ? (
          <label className="upload-card">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setInsurance(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div className="upload-card">
              <div className="text-center mx-auto">
                <h5>Click to upload file</h5>
                <p>Browse files</p>
              </div>
            </div>
          </label>
        ) : (
          // show preview of insurance
          <div className="upload-card">
            <IoIosCloseCircle
              onClick={() => setInsurance(null)}
              className="upload-remove"
              size={24}
            />
            <img
              className="object-contain p-2 w-full h-full"
              src={insurance}
              alt="insurance"
            />
          </div>
        )}
        {/* back */}
      </div>
      <Foot next="completed-jobs" format="single" />
    </div>
  );
}

export default Insurance;
