import Menu from "./Menu";
import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "./context/ProductsContext";
import Confirmation from "./Confirmation";

const About = ({
  setCurrentBackers,
  setCurrentMoney,
  currentMoney,
  currentBackers,
}) => {
  const products = useContext(ProductsContext);
  const [openSelectModal, setOpenSelectModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    console.log(currentMoney);
  }, [currentMoney]);

  function handleClick(e) {
    setOpenSelectModal(true);
    setSelectedProduct(e.target.id);
  }

  return (
    <div className="flex justify-center items-center flex-col rounded-md bg-white sm:w-full   pb-10 px-3 w-3/6 self-center lg:w-5/6 xl:w-4/6  lg:pb-2.5 lg:mx-16 ">
      <div className="text-left mx-10">
        <h3 className="my-8 text-xl font-bold ">About this project</h3>
        <p className="my-6 border-red-500 text-dark-gray leading-loose">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="my-6 text-dark-gray leading-loose">
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
      </div>

      <div className={`mx-10 flex flex-col `}>
        {products.map((product) => {
          if (product.id !== "default") {
            return (
              <div
                key={product.id}
                className={`flex flex-col border my-4 pb-4 border-dark-gray rounded-xl ${
                  product.stock === 0 ? "opacity-50" : ""
                }`}
              >
                <div className="flex justify-between items-center mt-8 mb-4 mx-8 md:flex-col md:items-start">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <span className="text-moderate-cyan">{product.pledge}</span>
                </div>
                <p className="mx-8 my-2 text-dark-gray leading-loose">
                  {product.description}
                </p>

                <div className=" flex  items-center justify-between md:flex-col md:items-start">
                  <div className=" mx-6 md:py-2">
                    <span className="font-bold text-3xl px-2">{`${product.stock}`}</span>{" "}
                    <span className="text-dark-gray">left</span>{" "}
                  </div>
                  <button
                    className={`text-white bg-moderate-cyan rounded-full self-end mx-4 my-4 px-6 py-3 ${
                      product.stock !== 0 && "hover:bg-dark-cyan"
                    } md:self-start md:ml-7 ${
                      product.stock === 0 && "bg-dark-gray"
                    }`}
                    id={product.id}
                    onClick={(e) => handleClick(e)}
                    disabled={product.stock === 0}
                  >
                    Select Reward
                  </button>
                </div>
              </div>
            );
          }
        })}
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

export default About;
