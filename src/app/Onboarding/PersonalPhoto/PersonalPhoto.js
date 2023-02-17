import React, { useState } from "react";

import Modal from "../../../components/Modal/Modal";
import Camera from "./components/Camera";

function PersonalPhoto({ setStep }) {
  const [picture, setPicture] = useState(null);
  const [showCam, setShowCam] = useState(false);

  // dropzone

  return (
    <div className="card w-full">
      <h4 className="text-xl md:text-3xl font-semibold mb-5">
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
      {picture !== null ? (
        <div className="w-full mx-auto text-center">
          <div className="border border-mute mx-auto text-center inline-block p-2 rounded-xl">
            <img className="rounded-xl" src={picture} alt="captured " />
          </div>
          <button
            onClick={() => setStep(4)}
            className="btn-primary w-full md:w-9/12 my-5"
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="border border-mute mb-5 rounded-lg flex items-center justify-center w-full h-[10rem]">
          No Image taken
        </div>
      )}

      <div className="flex w-full md:w-9/12 justify-center mx-auto gap-10">
        <button className="btn-primary w-full">Upload photo</button>
        <button
          onClick={() => {
            setShowCam(true);
            setPicture(null);
          }}
          className="btn-primary-outline w-full"
        >
          Take photo
        </button>
      </div>

      {/* Taking photos */}
      <Modal
        title="Take Photo"
        full={false}
        isOpen={showCam}
        setIsOpen={setShowCam}
      >
        <Camera
          setIsOpen={setShowCam}
          picture={picture}
          setPicture={setPicture}
        />
      </Modal>
    </div>
  );
}

export default PersonalPhoto;
