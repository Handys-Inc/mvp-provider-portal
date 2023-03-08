import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Avatar() {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <>
      {currentUser !== null && (
        <div className="w-10 h-10 rounded-full flex font-bold items-center justify-center bg-lightSecondary">
          <p>
            {currentUser.firstName.split("")[0]}
            {currentUser.lastName.split("")[0]}
          </p>
        </div>
      )}
    </>
  );
}

export default Avatar;
