import React from "react";

const Section = () => {
  return (
    <section className="container flex flex-col p-4 mx-auto mt-8 text-center md:text-start md:flex-row">
      <div className="flex flex-col space-y-16 md:w-1/2">
        <h3 className="text-4xl font-bold ">What's different about Manage?</h3>
        <p className="md:max-w-sm">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col mt-14 md:mt-0 md:w-1/2">
        <div className="flex space-x-7">
          <div className="flex items-start">
            <span className="px-5 mt-3 md:mt-0 btn">01</span>
          </div>
          <div className="flex flex-col space-y-6">
            <h3 className="p-3 text-xl font-bold md:p-0 md:bg-transparent bg-brightRedSupLight md:text-2xl">
              Track company-wide progress
            </h3>
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="flex mt-12 space-x-7">
          <div className="flex items-start">
            <span className="px-5 mt-3 md:mt-0 btn">02</span>
          </div>
          <div className="flex flex-col space-y-6">
            <h3 className="p-3 text-xl font-bold md:p-0 md:bg-transparent bg-brightRedSupLight md:text-2xl">
              Advanced built-in reports
            </h3>
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="flex mt-12 space-x-7">
          <div className="flex items-start">
            <span className="px-5 mt-3 md:mt-0 btn">03</span>
          </div>
          <div className="flex flex-col space-y-6">
            <h3 className="p-3 text-xl font-bold md:p-0 md:bg-transparent bg-brightRedSupLight md:text-2xl">
              Everything you need in one place
            </h3>
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution. What's Different About
              Manag
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
