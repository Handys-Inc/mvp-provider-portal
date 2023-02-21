import React, { useState } from "react";

// import IDFront from "../../../assets/custom-svgs/IDFront";
// import IDBack from "../../../assets/custom-svgs/IDBack";

import { IoIosCloseCircle } from "react-icons/io";

// rc
import { AiOutlineIdcard, AiOutlineCreditCard } from "react-icons/ai";

function IDCard({ setStep }) {
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);

  return (
    <div className="card">
      <h4 className="text-3xl font-semibold mb-5">
        Upload photos of your ID card
      </h4>
      <p>
        Make sure your photos aren’t blurry and the front of your identity card
        clearly shows your face.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-5">
        {/* front */}

        {front === null ? (
          <label className="upload-card">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setFront(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div>
              <AiOutlineIdcard size={24} className="mx-auto" />
              <h5>Upload front</h5>
              <p>JPEG or PNG only</p>
            </div>
          </label>
        ) : (
          // show preview of front
          <div className="upload-card">
            <IoIosCloseCircle
              onClick={() => setFront(null)}
              className="upload-remove"
              size={24}
            />
            <img
              className="object-contain p-2 w-full h-full"
              src={front}
              alt="front"
            />
          </div>
        )}

        {/* Back */}
        {back === null ? (
          <label className="upload-card">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setBack(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div>
              <AiOutlineCreditCard className="mx-auto" size={24} />
              <h5>Upload back</h5>
              <p>JPEG or PNG only</p>
            </div>
          </label>
        ) : (
          // show preview of front
          <div className="upload-card">
            <IoIosCloseCircle
              onClick={() => setBack(null)}
              className="upload-remove"
              size={24}
            />
            <img
              className="object-contain p-2 w-full h-full"
              src={back}
              alt="back"
            />
          </div>
        )}
      </div>

      <button onClick={() => setStep(5)} className="btn-primary w-full">
        Finish
      </button>
    </div>
  );
}

export default IDCard;
