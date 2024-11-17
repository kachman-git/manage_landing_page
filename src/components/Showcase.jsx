import React from "react";
import illustration from "../assets/img/illustration-intro.svg";

const Showcase = () => {
  return (
    <section className="container flex flex-col-reverse px-4 mx-auto mt-8 md:flex-row">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-7 md:mt-0">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyone together to build better products
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#" className="btn">
            Get Started
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={illustration} alt="" />
      </div>
    </section>
  );
};

export default Showcase;
