/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfWeek,
} from "date-fns";

import Modal from "./CalModal";
import ViewJob from "./ViewJob";

import { Fragment, useState } from "react";

const meetings = [
  {
    id: 1,
    name: "Leslie",
    work: "Cleaning",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-02-11T13:00",
    endDatetime: "2023-02-02T14:30",
  },
  {
    id: 2,
    name: "Michael",
    work: "Painting",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-02-14T09:00",
    endDatetime: "2023-02-20T11:30",
  },
  {
    id: 2,
    name: "Stephen",
    work: "Washing",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-02-14T09:00",
    endDatetime: "2023-02-20T11:30",
  },
  {
    id: 3,
    name: "Forson",
    work: "Plumbing",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-02-28T17:00",
    endDatetime: "2023-03-01T18:30",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const years = [
  { month: "January" },
  { month: "February" },
  { month: "March" },
  { month: "April" },
  { month: "May" },
  { month: "June" },
  { month: "July" },
  { month: "August" },
  { month: "September" },
  { month: "October" },
  { month: "November" },
  { month: "December" },
];

export default function View({ view, currentFocus }) {
  let today = startOfToday();
  // Selected day
  let [selectedDay, setSelectedDay] = useState(today);

  let [currentMonth, setCurrentMonth] = useState(currentFocus);

  // Current Day month
  let firstDayCurrentMonth = parse(currentFocus, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  // let selectedDayMeetings = meetings.filter((meeting) =>
  //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
  // );

  // modal controlling job view
  const [showJob, setShowJob] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  return (
    <div className="mb-20">
      {view === "monthly" ? (
        // SHOWING PER MONTH
        <div className="w-full">
          <div className="md:grid md:grid-cols-1 md:divide-x md:divide-gray-200">
            <div className="md:pr-14">
              <div className="flex items-center">
                {/* <h2 className="flex-auto font-semibold text-gray-900">
                  {format(firstDayCurrentMonth, "MMMM yyyy")}
                </h2> */}
                {/* <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button> */}
              </div>
              <div className="grid grid-cols-7 mt-10 text-sm md:text-base leading-6 text-right mr-3 text-gray-500">
                <div className="text-primary">SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div className="text-primary">SAT</div>
              </div>
              {/* Showing Dates */}
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "h-[5vh] md:min-h-[20vh] md:border  border-faintGray "
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && "text-primary",
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "text-primary",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-black",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-black text-opacity-30",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "font-bold text-primary",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-gray-900",
                        !isEqual(day, selectedDay) && "",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "flex w-full h-1/3 justify-end pr-3 pt-3"
                      )}
                    >
                      {/* mx-auto flex h-8 w-8 items-center justify-center
                    rounded-full */}
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>

                    {/* Meeting information */}
                    <div className="hidden md:block mx-4 -mt-4 h-full">
                      {meetings
                        .filter((meeting) =>
                          isSameDay(parseISO(meeting.startDatetime), day)
                        )
                        .map((single, index) => {
                          return (
                            <Fragment>
                              <div
                                onClick={() => {
                                  setSelectedJob(single);
                                  setShowJob(true);
                                }}
                                key={index}
                                className="w-full text-white my-2 cursor-pointer font-semibold text-xs items-center flex gap-2 bg-green-500 p-2 rounded-full"
                              >
                                <img
                                  className="w-5 h-5 rounded-full"
                                  src={single.imageUrl}
                                  alt="appointment"
                                />
                                <div>
                                  {single.name} - {single.work}
                                </div>
                              </div>

                              {/* MODAL */}
                              <Modal
                                title="Job Details"
                                full={true}
                                isOpen={showJob}
                                setIsOpen={setShowJob}
                              >
                                <ViewJob details={selectedJob} />
                              </Modal>
                            </Fragment>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section> */}
          </div>
        </div>
      ) : (
        // SHOWING PER YEAR
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
            {/* Loop over months in year */}
            {years.map((month) => {
              // TODO: GET ACTUAL DAYS IN THE MONTH
              return (
                <div>
                  <h3 className="text-primary">{month.month.toUpperCase()}</h3>
                  <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-right mr-3 text-gray-500">
                    <div className="text-primary">SUN</div>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THU</div>
                    <div>FRI</div>
                    <div className="text-primary">SAT</div>
                  </div>
                  <div className="grid grid-cols-7 mt-2 text-sm">
                    {days.map((day, dayIdx) => (
                      <div
                        key={day.toString()}
                        className={classNames(
                          dayIdx === 0 && colStartClasses[getDay(day)],
                          ""
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          className={classNames(
                            isEqual(day, selectedDay) && "text-primary",
                            !isEqual(day, selectedDay) &&
                              isToday(day) &&
                              "text-primary",
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              isSameMonth(day, firstDayCurrentMonth) &&
                              "text-black",
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              !isSameMonth(day, firstDayCurrentMonth) &&
                              "text-black text-opacity-30",
                            isEqual(day, selectedDay) &&
                              isToday(day) &&
                              "font-bold text-primary",
                            isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              "bg-gray-900",
                            !isEqual(day, selectedDay) && "",
                            (isEqual(day, selectedDay) || isToday(day)) &&
                              "font-semibold",
                            "flex w-full h-1/3 justify-end pr-3 pt-3"
                          )}
                        >
                          <time dateTime={format(day, "yyyy-MM-dd")}>
                            {format(day, "d")}
                          </time>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
