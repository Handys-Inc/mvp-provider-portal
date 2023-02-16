import React, { useState } from "react";

import Layout from "../../../components/Layout/Layout";

import { MdArrowBack } from "react-icons/md";

import { NavLink } from "react-router-dom";
import Border from "../../../components/Border/Border";

import Modal from '../../../components/Modal/Modal'

import { articles } from "../../../content/articles/articles";

function MobileResources() {
  const [selectedArticle, setSelectedArticle] = useState({title: "null", image: null, content: null});
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout current="menu" showHeader={false}>
      <div className="flex flex-col justify-between  w-full i md:hidden">
        <div className="mt-10 w-full">
          <p className="text-left font-bold text-lg">
            {" "}
            <NavLink to="/menu">
              <MdArrowBack className="mr-3 inline" size={24} />
            </NavLink>
            Resources and tips
          </p>
          <Border />
        </div>
        <div className="w-full">
          {articles.map((article) => {
            return (
              <div
                onClick={() => {
                  setSelectedArticle(article);
                  setIsOpen(true);
                }}
                key={article.id}
                className="flex cursor-pointer gap-3 items-center border border-faintGray mb-5 rounded-xl"
              >
                <img
                  className="rounded-tl-xl rounded-bl-xl w-20 h-20 object-cover"
                  src={article.image}
                  alt="article"
                />
                <h4>{article.title}</h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal to view article */}
      <Modal
        title={`${selectedArticle.title}`}
        full={true}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div>
          <img
            className="mx-auto text-center rounded-2xl"
            src={selectedArticle.image}
            alt="lady"
          />
        </div>

        <div className="my-10 max-w-xl mx-auto">{selectedArticle.content}</div>
      </Modal>
    </Layout>
  );
}

export default MobileResources;
