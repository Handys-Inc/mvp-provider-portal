import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom';

import Notify from '../../../components/Notify/Notify'

import Loader from '../../../utils/Loader'

import services from '../../../services'

function Foot({ next, format = "double", allow=false,  type }) {

const navigate = useNavigate();

const [loading, setLoading ] = useState(false)

const processData = () => {

  if(type === "consent"){
setLoading(true)
services.legalAgreement().then((res)=> {
  setLoading(false)
  
  console.log("legal agreement res", res.data)
    Notify("success", res.data)
navigate(`/onboarding/${next}`)
 
}).catch((e) => {
  setLoading(false)
  Notify("error", e.response.data)
  console.log("error with legal agreement", e)
})
   
  }
}

  return (
    <div className="card-footer">
      {format === "double" ? <React.Fragment>
        <button onClick={() => navigate(-1)} className="btn-primary-outline">
          Back
        </button>

        <button disabled={!allow || loading} onClick={() => processData()}  className="btn-primary w-32">
         {loading? <Loader/> : "Next" }
        </button>
      </React.Fragment> : <button disabled={!allow || loading} onClick={() => processData()} className="btn-primary w-full">
        Continue
      </button>}



    </div>
  )
}

export default Foot