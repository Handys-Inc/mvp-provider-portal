import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

import { GrClose } from "react-icons/gr";

export default function Modal({
  isOpen,

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
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-end items-end">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="position-y-200 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-4/12  transform overflow-hidden rounded-tl-lg rounded-bl-lg border border-faintGray bg-white p-3 md:p-6 h-screen shadow-md transition-all">
                  <div className="flex flex-row justify-between mb-5 md:mb-0">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <GrClose
                      className="bg-mute hover:bg-gray  rounded-full w-5 h-5 cursor-pointer p-1"
                      onClick={() => closeModal()}
                    />
                  </div>
                  <div className="md:mt-5">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
