import React from "react";

const Mobile = ({ openMenu }) => {
  const mobileMenu = openMenu ? "block" : "hidden";
  return (
    <div className={mobileMenu}>
      <ul className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
        <li>
          <a href="#" className="hover:opacity-70">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-70">
            Product
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-70">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-70">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-70">
            Community
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Mobile;
