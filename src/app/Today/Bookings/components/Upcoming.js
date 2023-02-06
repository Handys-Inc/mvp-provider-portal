import React, { useState } from "react";
import Nodata from "./Nodata";

function Upcoming() {
  const [data, setData] = useState([]);
  return (
    <div className="my-5">
      {data.length === 0 ? (
        <Nodata/>
      ) : (
        <div>Data</div>
      )}
    </div>
  );
}

export default Upcoming;
