import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "./context/ProductsContext";
import Pledge from "./Pledge";
import icon from "../assets/images/icon-close-modal.svg";

const Menu = ({
  selectedProductId,
  openSelectModal,
  openConfirmationModal,
  setCurrentBackers,
  setCurrentMoney,
  currentMoney,
  currentBackers,
}) => {
  const products = useContext(ProductsContext);

  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    setSelectedProduct(selectedProductId);
  }, [selectedProductId]);

  function handleChange(e) {
    setSelectedProduct(e.target.value);
  }

  function handleCloseButton() {
    openSelectModal(false);
  }

  return (
    <div className="relative overflow-visible h-5/6  w-3/6 xl:w-4/6 lg:w-5/6 ">
      <div className="rounded-md relative flex flex-col w-full bg-white p-10 md:pt-2">
        <div className="flex flex-col  ">
          <div className="flex flex-col md:flex-row-reverse md:justify-between ">
            <button
              onClick={handleCloseButton}
              className="self-end md:self-center"
            >
              <img src={icon} />
            </button>
            <h3 className="my-6 text-xl font-bold">Back this project</h3>
          </div>

          <p className="text-dark-gray leading-loose">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>

        <div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div
                  className={`relative flex flex-col justify-around items-baseline border rounded-lg mt-6 px-6 py-5 ${
                    selectedProduct === product.id
                      ? "border-2 border-moderate-cyan"
                      : "border-dark-gray"
                  } ${product.stock === 0 ? "opacity-50" : ""}`}
                >
                  <div className=" flex flex-row w-full justify-between my-2 ">
                    <label
                      className={` flex flex-row w-fit group font-bold  ${
                        product.stock !== 0
                          ? "hover:text-moderate-cyan cursor-pointer"
                          : ""
                      } `}
                    >
                      <input
                        className={`self-center mr-5 appearance-none rounded-full h-4 w-4 border border-dark-gray ${
                          product.stock !== 0
                            ? "hover:border-moderate-cyan cursor-pointer"
                            : ""
                        }  checked:border-dark-gray checked:bg-moderate-cyan checked:shadow-[0_0_0_3px_white_inset] `}
                        type="radio"
                        value={product.id}
                        name="pledges"
                        checked={selectedProduct === product.id}
                        onChange={handleChange}
                        disabled={product.stock === 0}
                      />
                      <div className=" flex flex-row md:flex-col ">
                        <p>{product.name}</p>
                        <p className="ml-3 text-moderate-cyan md:ml-0 ">
                          {product.pledge}
                        </p>
                      </div>
                    </label>

                    <div
                      className={`md:hidden ${
                        product.id === "default" ? "hidden" : "block"
                      }`}
                    >
                      <span className="font-bold text-xl ">{`${product.stock}`}</span>{" "}
                      <span className="text-dark-gray ">left</span>{" "}
                    </div>
                  </div>

                  <div>
                    <p className="text-dark-gray leading-loose ml-9 md:ml-0 my-2">
                      {product.description}
                    </p>
                    <div
                      className={`hidden md:block ${
                        product.id === "default" ? "md:hidden" : "md:block"
                      }`}
                    >
                      <span className="font-bold text-xl ">{`${product.stock}`}</span>{" "}
                      <span className="text-dark-gray ">left</span>{" "}
                    </div>
                  </div>

                  <div
                    className={`w-full ${
                      selectedProduct === product.id ? "block" : "hidden"
                    }`}
                  >
                    <Pledge
                      price={product.price}
                      openConfirmationModal={openConfirmationModal}
                      openSelectModal={openSelectModal}
                      setCurrentBackers={setCurrentBackers}
                      setCurrentMoney={setCurrentMoney}
                      currentMoney={currentMoney}
                      currentBackers={currentBackers}
                    ></Pledge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-8 border"></div>
    </div>
  );
};

export default Menu;
