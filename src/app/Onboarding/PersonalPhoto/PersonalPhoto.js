import React, { useState } from "react";

import Modal from "../../../components/Modal/Modal";
import Camera from "./components/Camera";
import Foot from "../components/Foot";

function PersonalPhoto({ setStep }) {
  const [picture, setPicture] = useState(null);
  const [showCam, setShowCam] = useState(false);

  const imageUpload = (file) => {
    setPicture(URL.createObjectURL(file));
  };

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
          <Foot next="id-card" format="single" />
        </div>
      ) : (
        <div className="border border-mute mb-5 rounded-lg flex items-center justify-center w-full h-[10rem]">
          Upload or take a photo
        </div>
      )}

      <div className="flex w-full md:w-9/12 justify-center mx-auto gap-10">
        <label className="btn-primary cursor-pointer w-full text-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setPicture(null);
              imageUpload(e.target.files[0]);
            }}
          />
          Upload photo
        </label>

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
