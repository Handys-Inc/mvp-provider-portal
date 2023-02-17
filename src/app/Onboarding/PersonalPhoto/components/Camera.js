import React, { useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const Camera = ({ picture, setPicture, setIsOpen }) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  return (
    <div>
      <div>
        {picture === null ? (
          <Webcam
            className="rounded-xl mx-auto text-center"
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img
            className="mx-auto rounded-xl text-center"
            src={picture}
            alt="personal"
          />
        )}
      </div>
      <div className="my-5">
        {picture !== null ? (
          <div className="flex justify-center gap-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                setPicture(null);
              }}
              className="btn-primary-outline"
            >
              Retake
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
              className="btn-primary"
            >
              Use Photo
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn-primary"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
export default Camera;
