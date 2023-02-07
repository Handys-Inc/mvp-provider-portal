import React, { useState, Fragment } from "react";
import Layout from "../../components/Layout/Layout";

import warning from "../../assets/icons/warning.svg";

import { Tab } from "@headlessui/react";

// tab components
import Gross from "./Gross/Gross";
import Upcoming from "./Upcoming/Upcoming";
import Completed from "./Completed/Completed";

function Transactions() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Layout>
      <div className="max-w-3xl my-10 mx-auto">
        {/* Prompt to add payout method */}
        <div className="border border-faintGray rounded-xl shadow-lg p-5 flex gap-5">
          <div>
            <img className="w-10" src={warning} alt="warning" />
          </div>
          <div>
            <h4 className="text-xl font-bold">Add a payout method</h4>
            <p className="text-lg font-light">
              You'll need to setup your payouts in order to get paid
            </p>
            <div className="flex gap-5 mt-4 items-center">
              <p className="underline text-sm font-semibold">Learn more</p>{" "}
              <button className="btn-dark-outline">Get Started</button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <h3 className="font-semibold text-2xl mt-10 mb-5">
          Transaction history
        </h3>
        <div className="flex-1 min-h-fit md:min-h-[20rem]">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div class="border-b border-mute">
              <Tab.List class="flex flex-wrap  -mb-px ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Competed payouts</span>
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Upcoming payouts</span>
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Gross earnings</span>
                    </button>
                  )}
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels>
              {/* Payments */}
              <Tab.Panel>
                <Completed />
              </Tab.Panel>

              {/* Payouts */}
              <Tab.Panel>
                <Upcoming />
              </Tab.Panel>

              {/* Taxes */}
              <Tab.Panel>
                <Gross />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
}

export default Transactions;
