import React from "react";

function PersonalPhoto({setStep}) {
  return (
    <div className="card">
      <h4 className="text-3xl font-semibold mb-5">
        Take or upload your profile photo
      </h4>
      <p>
        Your profile photo helps people recognize you. Please note that once you
        submit your profile photo it cannot be changed.
      </p>
      <p className="my-5 text-gray font-light">
        1. Face the camera directly with your eyes and mouth clearly visible{" "}
        <br />
        2. Make sure the photo is well lit, free of glare, and in focus <br />
        3. No photos of a photo, filters, or alterations
      </p>
      <div className="border border-mute mb-5 rounded-lg flex items-center justify-center w-full h-[10rem]">
        +
      </div>
      <button onClick={() => setStep(4)} className="btn-primary w-full">Upload photo</button>
      <button className="btn-primary-outline w-full mt-4">Take photo</button>
    </div>
  );
}

export default PersonalPhoto;
