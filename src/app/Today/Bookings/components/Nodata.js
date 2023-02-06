import React from "react";

import empty from "../../../../assets/icons/empty.svg";

function Nodata() {
  return (
    <div className="bg-lightGray h-48 justify-center flex items-center rounded-xl">
      <div>
        {" "}
        <img className="text-center mx-auto mb-1" src={empty} alt="no data" />
        <p>No available data to show</p>
      </div>
    </div>
  );
}

export default Nodata;
