import React from 'react'

import { useNavigate } from 'react-router-dom';

function Foot({ next, format = "double" }) {

  const navigate = useNavigate();


  return (
    <div className="card-footer">
      {format === "double" ? <React.Fragment>
        <button onClick={() => navigate(-1)} className="btn-primary-outline">
          Back
        </button>

        <button onClick={() => navigate(`/onboarding/${next}`)} className="btn-primary">
          Next
        </button>
      </React.Fragment> : <button onClick={() => navigate(`/onboarding/${next}`)} className="btn-primary w-full">
        Continue
      </button>}



    </div>
  )
}

export default Foot