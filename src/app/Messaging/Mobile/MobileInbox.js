import React, { useState, Fragment } from "react";

import Border from "../../../components/Border/Border";

import { FiSearch } from "react-icons/fi";

// TODO: sample people
import profile from "../../../assets/images/profile.png";
import hanna from "../../../assets/sample/john.png";
import john from "../../../assets/sample/john.png";
import shiela from "../../../assets/sample/shiela.png";
import jane from "../../../assets/sample/jane.png";

// mobile chat pane
import PaneMobile from "./PaneMobile";
import Chat from "./Chat";

function MobileInbox() {
  // showing chat modal
  const [show, setShow] = useState(false);

  const [preview, setPreview] = useState([
    {
      name: "Jane Parker",
      pro: "Painter",
      date: "Jan 13",
      lastMessage: "Hello I'd like to know when you would be available",
      img: profile,
    },
    {
      name: "Hanna Wilson",
      pro: "Interior Stylist",
      date: "Jan 2",
      lastMessage: "Do you want peach or burgundy?",
      img: hanna,
    },
    {
      name: "Wilheminaa Brow",
      pro: "Painter",
      date: "Jan 13",
      lastMessage: "Hello I'd like to know when you would be available",
      img: jane,
    },
    {
      name: "John Doe",
      pro: "Painter",
      date: "Jan 13",
      lastMessage: "Hello I'd like to know when you would be available",
      img: john,
    },
    {
      name: "Shiela Daniels",
      pro: "Painter",
      date: "Jan 13",
      lastMessage: "Hello I'd like to know when you would be available",
      img: shiela,
    },
    {
      name: "Jane Parker",
      pro: "Painter",
      date: "Jan 13",
      lastMessage: "Hello I'd like to know when you would be available",
      img: profile,
    },
    {
      name: "Hanna Wilson",
      pro: "Painter",
      date: "Jan 2",
      lastMessage: "Are you gonna want peach or burgundy?",
      img: hanna,
    },
  ]);

  return (
    <div className="mb-48 pt-5">
      {/* Header */}
      <h4 className="mb-8 text-2xl font-bold">All Messages</h4>

      {/* Messages */}
      {preview.map((single) => {
        return (
          <Fragment>
            <div
              onClick={() => setShow(true)}
              className="flex gap-5 cursor-pointer rounded-2xl"
            >
              <div>
                <img className="w-12" src={single.img} alt="provider" />
              </div>
              <div className="text-left">
                <div className="text-gray mt-2 text-xs">Booking Completed</div>
                <h3 className="font-bold text-lg">{single.name}</h3>
                <p className="text-gray text-sm">{single.lastMessage}</p>
              </div>
            </div>
            <Border />

            {/* Chat Pane */}
            <PaneMobile
              details={single}
              title={single.name}
              isOpen={show}
              setIsOpen={setShow}
            >
              <Chat details={single} />
            </PaneMobile>
          </Fragment>
        );
      })}
    </div>
  );
}

export default MobileInbox;
