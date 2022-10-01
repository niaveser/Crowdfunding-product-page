import icon from "../assets/images/icon-check.svg";

const Confirmation = ({ openConfirmationModal }) => {
  function handleClick() {
    openConfirmationModal(false);
  }
  return (
    <div className="flex justify-center">
      <div className="rounded-md relative flex flex-col items-center w-6/12 bg-white px-10 py-6 lg:w-5/6 xl:w-4/6">
        <img src={icon} className="my-4" />
        <h3 className="font-bold text-xl my-2">Thanks for your support!</h3>
        <p className="text-dark-gray text-center leading-loose my-2 ">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          className="text-white bg-moderate-cyan rounded-full px-8 py-3 my-6 hover:bg-dark-cyan"
          onClick={handleClick}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
