import { useState, useEffect } from "react";

const ProgressBar = ({
  setCurrentMoney,
  currentMoney,
  setCurrentBackers,
  currentBackers,
  daysLeft,
}) => {
  const totalMoney = 100000;
  const initialProgress = () => {
    return (100 * currentMoney) / totalMoney;
  };
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    setProgress((100 * currentMoney) / totalMoney);
  }, [currentMoney, currentBackers]);

  return (
    <div className=" flex flex-col  bg-white rounded-md w-3/6 self-center px-10 lg:w-5/6 xl:w-4/6  mb-10 lg:pb-2.5 xl:mx-16 ">
      <div className=" flex md:flex-col justify-around self-center  lg:justify-self-center">
        <div className=" md:flex md:flex-col  border-r md:border-r-0  border-dark-gray my-10 pr-20 text-left md:text-center md:mx-0 md:px-0 lg:px-6 ">
          <h1 className="font-bold text-3xl py-1">
            {currentMoney.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </h1>
          <p className="text-dark-gray text-xs">of $100,000 backed</p>
          <hr className="hidden md:block md:self-center  mt-8 w-2/6 " />
        </div>
        <div className="my-10 text-left md:text-center px-20 md:my-0 ">
          <h1 className="font-bold text-3xl py-1">
            {currentBackers.toLocaleString("en-US")}
          </h1>
          <p className="text-dark-gray text-xs">total backers</p>
        </div>

        <div className=" md:flex md:flex-col border-l md:border-l-0 border-dark-gray my-10 pl-20 text-left md:px-0 md:text-center">
          <hr className="hidden md:block md:self-center mb-5 w-2/6 " />
          <h1 className="font-bold text-3xl py-1">{daysLeft}</h1>
          <p className="text-dark-gray text-xs">days left</p>
        </div>
      </div>
      <div className="w-9/12 bg-background-gray rounded-full h-3 self-center my-12  md:mx-0 md:self-center">
        <div
          className="bg-moderate-cyan h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
