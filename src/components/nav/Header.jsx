import React from "react";
import logo from "../../assets/img/logo.svg";

const Header = ({ toggleMenu, openMenu }) => {
  const hamburger = openMenu ? "open" : "";
  return (
    <nav className="container flex items-center justify-between px-4 pt-10 mx-auto">
      <img src={logo} alt="logo" className="cursor-pointer" />
      <ul className="hidden space-x-4 md:flex">
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
      <button className="hidden md:block btn">Get Started</button>

      <div
        id="hamburger"
        className={`block md:hidden ${hamburger}`}
        onClick={toggleMenu}
      >
        <span className=" hamburger-top"></span>
        <span className=" hamburger-middle"></span>
        <span className=" hamburger-bottom"></span>
      </div>
    </nav>
  );
};

export default Header;
