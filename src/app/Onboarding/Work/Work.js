import React from "react";

function Work({ setStep }) {
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
        <div className="border border-mute mb-5 rounded-lg flex items-center justify-center w-full h-[10rem]">
          +
        </div>
        <div className="border border-mute mb-5 rounded-lg flex items-center justify-center w-full h-[10rem]">
          +
        </div>
        <div className="border border-mute mb-5 rounded-lg flex items-center justify-center w-full h-[10rem]">
          +
        </div>
      </div>

      <button onClick={() => setStep(0)} className="btn-primary w-full">
        Upload photos
      </button>
    </div>
  );
}

export default Work;
