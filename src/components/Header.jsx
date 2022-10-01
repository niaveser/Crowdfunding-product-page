import React from "react";
import { useState } from "react";
import icon from "../assets/images/logo-mastercraft.svg";
import Menu from "./Menu";
import Confirmation from "./Confirmation";

const Header = ({
  setCurrentBackers,
  setCurrentMoney,
  currentMoney,
  currentBackers,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const [openSelectModal, setOpenSelectModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  function handleBookmarkClick() {
    setBookmark(!bookmark);
  }

  function handleClick() {
    setOpenSelectModal(true);
  }
  return (
    <div className="flex flex-col relative">
      <div className="relative self-center flex flex-col  items-center bg-white rounded-md text-center px-10 py-10 mb-10 w-3/6 lg:w-5/6 xl:w-4/6 lg:mt-2.5   lg:mx-16 ">
        <div className=" absolute mx-auto  top-[-2rem]">
          <img src={icon} />
        </div>

        <div className="">
          <h1 className="text-3xl font-bold py-1">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-dark-gray py-4">
            A beautiful & handcrafter monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className=" flex justify-between  w-full lg:w-10/12 mt-4">
          <div className="self-start">
            <button
              onClick={handleClick}
              className="md:w-fit text-white font-medium bg-moderate-cyan rounded-full cursor-pointer px-9 py-4 hover:bg-dark-cyan"
            >
              Back this project
            </button>
          </div>

          <div className=" flex self-end">
            <button
              onClick={handleBookmarkClick}
              className={` flex justify-between items-center lg:w-16 lg:bg-white   ${
                bookmark ? "text-dark-cyan" : "text-dark-gray "
              } font-bold bg-background-gray rounded-full`}
            >
              <svg
                className={` flex justify-center item-center w-20  h-14 mx-0 px-0 fill-dark-gray ${
                  bookmark && "fill-background-gray"
                }`}
              >
                <g>
                  <circle
                    className={`${
                      bookmark ? "fill-dark-cyan" : "fill-neutral-black"
                    }`}
                    cx="28"
                    cy="28"
                    r="28"
                  />
                </g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M23 19v18l5-5.058L33 37V19z"
                />
              </svg>
              <span className=" pr-6 lg:hidden">
                {bookmark ? "Bookmarked" : "Bookmark"}
              </span>
            </button>
          </div>
        </div>
      </div>
      {openSelectModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 filter backdrop-brightness-50">
          <Menu
            selectedProductId={selectedProduct}
            openConfirmationModal={setOpenConfirmationModal}
            openSelectModal={setOpenSelectModal}
            setCurrentBackers={setCurrentBackers}
            setCurrentMoney={setCurrentMoney}
            currentMoney={currentMoney}
            currentBackers={currentBackers}
          ></Menu>
        </div>
      ) : null}

      {openConfirmationModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 filter backdrop-brightness-50">
          <Confirmation
            openConfirmationModal={setOpenConfirmationModal}
          ></Confirmation>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
