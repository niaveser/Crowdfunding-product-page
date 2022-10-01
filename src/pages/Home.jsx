import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import About from "../components/About";
import Nav from "../components/Nav";
import { useState } from "react";

const Home = () => {
  const [currentMoney, setCurrentMoney] = useState(89914);
  const [currentBackers, setCurrentBackers] = useState(5007);
  const [daysLeft, setDaysLeft] = useState(56);

  return (
    <div className="relative bg-background-gray">
      <div className=" flex flex-col bg-hero-pattern  h-full w-full md:bg-[url('/src/assets/images/image-hero-mobile.jpg')] bg-no-repeat bg-contain ">
        <div className="pb-48 lg:pb-20 z-10">
          <Nav></Nav>
        </div>
        <Header
          setCurrentBackers={setCurrentBackers}
          setCurrentMoney={setCurrentMoney}
          currentMoney={currentMoney}
          currentBackers={currentBackers}
        ></Header>
        <ProgressBar
          setCurrentBackers={setCurrentBackers}
          setCurrentMoney={setCurrentMoney}
          currentMoney={currentMoney}
          currentBackers={currentBackers}
          daysLeft={daysLeft}
        ></ProgressBar>
        <About
          setCurrentBackers={setCurrentBackers}
          setCurrentMoney={setCurrentMoney}
          currentMoney={currentMoney}
          currentBackers={currentBackers}
        ></About>
        <div className="  my-10 "></div>
      </div>
    </div>
  );
};

export default Home;
