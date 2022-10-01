import { useState } from "react";

const Pledge = ({
  price,
  openConfirmationModal,
  openSelectModal,
  setCurrentMoney,
  setCurrentBackers,
  currentMoney,
  currentBackers,
}) => {
  const [payment, setPayment] = useState(price);

  function handleClick() {
    openConfirmationModal(true);
    openSelectModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (payment >= price && payment != 0) {
      setPayment(payment);
      setCurrentMoney(currentMoney + payment);
      setCurrentBackers(currentBackers + 1);
    }
  }

  function handleChange(e) {
    setPayment(parseInt(e.target.value));
  }

  return (
    <div className="flex flex-row md:flex-col justify-between items-baseline pt-3">
      <hr className="absolute left-0 border-t border-dark-gray w-full "></hr>
      <p className="pt-10 w-fit text-dark-gray md:self-center">
        Enter your pledge
      </p>
      <div className="w-fit flex justify-end md:self-center md:pt-5 ">
        <form className="flex  justify-between items-center ">
          <div className=" ml-12 md:ml-0 flex w-2/6 h-full items-center justify-center md:justify-between border rounded-full hover:border-moderate-cyan">
            <span className="ml-3 text-dark-gray font-bold">$</span>
            <input
              type="number"
              id="price"
              name="price"
              min={price}
              value={payment}
              className="w-3/6 md:mr-2 outline-none text-center font-bold hover:cursor-pointer"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button
              onClick={(e) => {
                handleClick();
                handleSubmit(e);
              }}
              className="rounded-full text-white bg-moderate-cyan  px-6 py-3 hover:bg-dark-cyan"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pledge;
