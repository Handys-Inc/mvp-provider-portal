import React from "react";

import Nodata from "./Nodata";

function Completed({ data }) {
  return (
    <div className="my-5">
      {data.length === 0 ? <Nodata /> : <div>Dataasdfasdfasdfasd</div>}
    </div>
  );
}

export default Completed;
