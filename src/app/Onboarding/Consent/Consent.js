import React, {useState} from "react";

import Border from "../../../components/Border/Border";
import Foot from "../components/Foot";

function Consent() {

const [allow, setAllow] = useState(false)

  return (
    <div className="card">
      <h4 className="text-2xl md:text-4xl font-semibold mb-5">Legal conset</h4>
      <p className="font-light text-[#626262]">
        By clicking you agree. you are consenting to Handys, its affiliates or
        partners obtaining your commercial driving record from ICBC. which is
        required to determine your qualification to provide Handy services.
        Records may be obtained on an annual or more frequent basis as required
        by law and consistent with Handys’ Privacy Policies for as long as you
        are affiliated with Handys
      </p>

      <Border />

      {/* Checklist */}
      <div className="flex my-5 mb-10 justify-between">
        <h3>I Agree</h3>
        <div>
          <input value={allow} onChange={() => setAllow(!allow)} type="checkbox" />
        </div>
      </div>
      <Foot type="consent" allow={allow} next="job" />
    </div>
  );
}

export default Consent;
