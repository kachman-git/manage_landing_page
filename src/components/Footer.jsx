import logo from "../assets/img/logo.svg";
import iconyoutube from "../assets/img/icon-youtube.svg";
import iconfacebook from "../assets/img/icon-facebook.svg";
import iconinstagram from "../assets/img/icon-instagram.svg";
import iconpinterest from "../assets/img/icon-pinterest.svg";
import icontwitter from "../assets/img/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="text-white bg-black/80">
      <div className="container flex flex-col items-center justify-between w-full gap-6 px-4 py-12 mx-auto md:items-start md:flex-row ">
        <div className="flex gap-4 md:hidden">
          <input
            type="text"
            placeholder="Updated in your inbox"
            className="px-4 py-2 rounded-full"
          />
          <button className="btn">Go</button>
        </div>
        <div className="flex space-x-16 md:hidden">
          <ul className="flex flex-col space-y-7">
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">Home</a>
            </li>
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">Pricing</a>
            </li>
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">Products</a>
            </li>
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">About</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-7">
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">Careers</a>
            </li>
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">Comunity</a>
            </li>
            <li className="transition-all duration-100 ease-in hover:text-brightRed">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-9">
          <a href="#">
            <img src={logo} alt="logo" className="mx-auto md:mx-0" />
          </a>

          <div className="flex space-x-6">
            <a href="#">
              <img src={iconfacebook} alt="" />
            </a>
            <a href="#">
              <img src={iconinstagram} alt="" />
            </a>
            <a href="#">
              <img src={iconpinterest} alt="" />
            </a>
            <a href="#">
              <img src={icontwitter} alt="" />
            </a>
            <a href="#">
              <img src={iconyoutube} alt="" />
            </a>
          </div>
        </div>
        <ul className="flex-col hidden md:flex space-y-7">
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">Home</a>
          </li>
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">Pricing</a>
          </li>
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">Products</a>
          </li>
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">About</a>
          </li>
        </ul>

        <ul className="flex-col hidden md:flex space-y-7">
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">Careers</a>
          </li>
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">Comunity</a>
          </li>
          <li className="transition-all duration-100 ease-in hover:text-brightRed">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>

        <div className="flex flex-col">
          <div className="hidden gap-4 md:flex">
            <input
              type="text"
              placeholder="Updated in your inbox"
              className="px-4 py-2 rounded-full"
            />
            <button className="btn">Go</button>
          </div>

          <span className="mt-3 md:mt-12">
            Copyright © 2022, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
