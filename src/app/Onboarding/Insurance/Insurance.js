import React from "react";

function Insurance({ step, setStep }) {
  return (
    <div className="card">
      <h4 className="text-xl md:text-3xl font-semibold mb-5">
        Upload photos of your insurance
      </h4>
      <p>Upload png, jpg or pdf. Make sure your photos aren’t blurry.</p>
      <div className="flex flex-col md:flex-row items-center justify-between my-5 gap-5">
        {/* front */}
        <div className="upload-card">
          <div className="text-center mx-auto">
            <h5>Drag and drop files</h5>
            <p>Browse files</p>
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

export default Insurance;
