import React, { Fragment, useState } from "react";

import Modal from "../../../../components/Modal/Modal";

function SingleResource({ resource }) {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div onClick={() => setShow(true)} className="resource-card">
        <img src={resource.image} alt="lady" />
        <h4 className=" h-[6rem] p-4 text-lg border border-t-0  border-gray rounded-br-3xl rounded-bl-3xl  font-semibold">
          {resource.title}
        </h4>
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
            className="mx-auto text-center rounded-2xl"
            src={resource.image}
            alt="lady"
          />
        </div>

        <div className="my-10 max-w-xl mx-auto">{resource.content}</div>
      </Modal>
    </Fragment>
  );
}

export default SingleResource;
