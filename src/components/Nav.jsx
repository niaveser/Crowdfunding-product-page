import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";
import { useState } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleChange() {
    setOpenMenu(!openMenu);
  }
  return (
    <div className="relative mx-10">
      <div className="flex flex-row justify-between items-baseline">
        <div className="my-10">
          <img src={logo} className="mx-4" />
        </div>
        <div className="my-10 text-white block md:hidden">
          <a className="mx-4 hover:cursor-pointer">About</a>
          <a className="mx-4 hover:cursor-pointer">Discover</a>
          <a className="mx-4 hover:cursor-pointer">Get Started</a>
        </div>

        <div className="hidden md:block">
          <img
            src={openMenu ? closeIcon : menuIcon}
            onClick={handleChange}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute w-full">
        {openMenu ? (
          <div className="bg-white rounded-md w-full md:block hidden">
            <div className="cursor-pointer py-3 pl-6 border-b border-background-gray">
              About
            </div>
            <div className="cursor-pointer py-3 pl-6 border-b border-background-gray">
              Discover
            </div>
            <div className="cursor-pointer py-3 pl-6">Get Started</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
