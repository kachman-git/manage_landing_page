import React from "react";

const Cta = () => {
  return (
    <div className="mt-16 bg-brightRed">
      <div
        className="container flex items-center justify-between h-48 p-4 mx-auto"
        id="cta"
      >
        <h3 className="w-4/6 text-2xl font-bold text-white md:text-4xl">
          Simplify how your team works today
        </h3>
        <button className="bg-white btn text-brightRed">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
