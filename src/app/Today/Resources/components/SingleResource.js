import React, { Fragment, useState } from "react";

// TODO: Remove Sample image
import lady from "../../../../assets/sample/lady.png";

import Modal from "../../../../components/Modal/Modal";

function SingleResource({ resource }) {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div onClick={() => setShow(true)} className="resource-card">
        <img src={lady} alt="lady" />
        <h4 className="p-5 text-lg font-semibold">{resource.title}</h4>
      </div>

      {/* Article Modal */}
      <Modal
        titlePosition="center"
        title={resource.title}
        full={true}
        isOpen={show}
        setIsOpen={setShow}
      >
        <div>
          <img
            className="mx-auto text-center rounded-xl"
            src={lady}
            alt="lady"
          />
        </div>

        <div className="my-10 max-w-xl mx-auto">{resource.content}</div>
      </Modal>
    </Fragment>
  );
}

export default SingleResource;
