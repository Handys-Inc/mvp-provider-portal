import React, { Fragment, useEffect, useState } from "react";

import Modal from "../../../../components/Modal/Modal";

import { articles } from "../../../../content/articles/articles"

function SingleResource({ resource }) {
  const [show, setShow] = useState(false);

  const [selectedResource, setSelectedResource] = useState(resource)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedResource]);

  return (
    <Fragment>
      <div onClick={() => setShow(true)} className="resource-card">
        <img src={selectedResource.image} alt="lady" />
        <h4 className=" h-[6rem] p-4 text-lg border border-t-0  border-gray rounded-br-3xl rounded-bl-3xl  font-semibold">
          {selectedResource.title}
        </h4>
      </div>

      {/* Article Modal */}
      <Modal
        titlePosition="center"
        title={selectedResource.title}
        full={true}
        isOpen={show}
        setIsOpen={setShow}
      >
        <div>
          <img
            className="mx-auto text-center rounded-2xl"
            src={selectedResource.image}
            alt="lady"
          />
        </div>

        <div className="my-10 px-5 md:px-0 max-w-xl mx-auto">{selectedResource.content}</div>

        <div className="flex max-w-xl mx-auto justify-between">
          <button
            onClick={() =>
              setSelectedResource(articles.filter((article) => article.id === selectedResource.id - 1)[0])
            }

            disabled={selectedResource.id === 1} className="btn-primary-outline">Back</button>
          <button onClick={() => {
            setSelectedResource(articles.filter((article) => article.id === selectedResource.id + 1)[0])
          }}

            disabled={selectedResource.id === 3} className="btn-primary">Next</button>
        </div>
      </Modal>
    </Fragment>
  );
}

export default SingleResource;
