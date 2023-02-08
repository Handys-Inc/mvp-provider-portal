import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import RawBorder from "../../../components/Border/RawBorder";

export default function PaneMobile({
  back = true,
  isOpen,
  setIsOpen,
  title,
  children,
  details,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-screen  w-full bottom-0 md:items-center md:justify-center md:pt-4 md:pb-4 md:px-4  pb-0 px-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-2xl transform overflow-hidden rounded-none md:rounded-2xl bg-white p-3 md:p-6  align-bottom md:align-middle shadow-2xl transition-all">
                  <div className="flex items-center flex-row justify-between mt-2 mb-5 md:mb-0">
                    <Dialog.Title
                      as="h2"
                      className=" text-left text-xl flex items-center font-semibold text-black"
                    >
                      {back && (
                        <MdArrowBack
                          onClick={() => closeModal()}
                          className="mr-3 inline"
                          size={18}
                        />
                      )}
                      <div>
                        <h4>{details.name}</h4>
                        <p className="block text-xs text-green-600">Online</p>
                      </div>
                    </Dialog.Title>
                    <AiOutlineInfoCircle />
                  </div>
                  <RawBorder />
                  <div className="md:my-5">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
