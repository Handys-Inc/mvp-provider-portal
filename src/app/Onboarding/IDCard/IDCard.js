import React from "react";

import IDFront from "../../../assets/custom-svgs/IDFront";
import IDBack from "../../../assets/custom-svgs/IDBack";

function IDCard({ setStep }) {
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
        <div className="upload-card">
          <div className="text-center mx-auto">
            <IDFront size={30} />
            <h5>Upload front</h5>
            <p>JPEG or PNG only</p>
          </div>
        </div>
        <div className="upload-card">
          <div className="text-center mx-auto">
            <IDBack className="mx-auto text-center inline-block" size={30} />
            <h5>Upload back</h5>
            <p>JPEG or PNG only</p>
          </div>
        </div>

        {/* back */}
      </div>
      <button onClick={() => setStep(5)} className="btn-primary w-full">
        Finish
      </button>
    </div>
  );
}

export default IDCard;
