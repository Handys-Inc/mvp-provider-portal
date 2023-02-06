import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

import { GrClose } from "react-icons/gr";

import { MdArrowBack } from "react-icons/md";

export default function Modal({
  isOpen,
  back = false,
  full = false,
  titlePosition = "left",
  setIsOpen,
  title,
  children,
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
            <div
              className={`${
                full
                  ? "flex min-h-screen  w-full bottom-0 mt-20  pb-0 px-0"
                  : "flex absolute md:relative md:min-h-screen min-h-auto  w-full bottom-0 md:items-center md:justify-center md:pt-4 md:pb-4 md:px-4 pt-20 pb-0 px-0 text-center"
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* FULL Modal or Half Modal */}
                {full ? (
                  //FUll Modal
                  <Dialog.Panel className="w-full  transform overflow-hidden rounded-none md:rounded-2xl bg-white p-3 md:p-6  align-bottom md:align-middle shadow-2xl transition-all">
                    {titlePosition === "center" ? (
                      <div className="mb-5 md:mb-0">
                        <GrClose
                          className="bg-mute hover:bg-gray  rounded-full w-5 h-5 cursor-pointer p-1 absolute right-4 top-4"
                          onClick={() => closeModal()}
                        />
                        <Dialog.Title
                          as="h2"
                          className="md:text-2xl mx-auto text-center text-lg font-bold leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-between mb-5 md:mb-0">
                        <Dialog.Title
                          as="h2"
                          className="md:text-2xl mx-auto text-center text-lg font-bold leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                        <GrClose
                          className="bg-mute hover:bg-gray  rounded-full w-5 h-5 cursor-pointer p-1"
                          onClick={() => closeModal()}
                        />
                      </div>
                    )}

                    <div className="md:mt-5">{children}</div>
                  </Dialog.Panel>
                ) : (
                  // Half Modal
                  <Dialog.Panel className="w-full md:max-w-2xl transform overflow-hidden rounded-none md:rounded-2xl bg-white p-3 md:p-6 text-center align-bottom md:align-middle shadow-2xl transition-all">
                    {titlePosition === "center" ? (
                      <div className="mb-5 md:mb-0">
                        <GrClose
                          className="bg-mute hover:bg-gray  rounded-full w-5 h-5 cursor-pointer p-1"
                          onClick={() => closeModal()}
                        />
                        <Dialog.Title
                          as="h2"
                          className="md:text-2xl mx-auto text-center text-lg font-bold md:font-medium leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-between mb-5 md:mb-0">
                        <Dialog.Title
                          as="h2"
                          className="md:text-2xl mx-auto text-center text-lg font-bold md:font-medium leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                        <GrClose
                          className="bg-mute hover:bg-gray  rounded-full w-5 h-5 cursor-pointer p-1"
                          onClick={() => closeModal()}
                        />
                      </div>
                    )}

                    <div className="md:my-5">{children}</div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
