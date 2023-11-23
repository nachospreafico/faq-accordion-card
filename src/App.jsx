import "./App.css";
import HeaderImageMob from "./assets/images/illustration-woman-online-mobile.svg";
import HeaderImageDesk from "./assets/images/illustration-woman-online-desktop.svg";
import BoxDesktop from "./assets/images/illustration-box-desktop.svg";
import BgMobile from "./assets/images/bg-pattern-mobile.svg";
import BgDesktop from "./assets/images/bg-pattern-desktop.svg";
import FAQItem from "./components/FAQItem";
import { data } from "./data.jsx";
import { useState, useEffect } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleIsClicked(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <main className="h-[768px] bg-gradient-to-b from-purple-400 to-violet-500 flex justify-center items-center pt-32 lg:pt-0">
      <div
        style={{ boxShadow: "0px 50px 50px -20px rgba(53, 18, 122, 0.50)" }}
        className="bg-white relative w-[90%] max-w-[327px] lg:max-w-[920px] lg:h-[509px] h-fit max-h-[768px] rounded-3xl pt-32 pb-12 lg:pt-0 lg:pb-0 lg:grid lg:items-center grid-cols-2"
      >
        {isMobile ? (
          <div>
            <img
              src={HeaderImageMob}
              className="absolute w-[237px] h-[180px] top-[-100px] left-[50%] translate-x-[-50%]"
            ></img>
            <img
              src={BgMobile}
              className="absolute top-0 left-[50%] translate-x-[-50%]"
            ></img>
          </div>
        ) : (
          <div className="w-full overflow-hidden">
            <img
              src={HeaderImageDesk}
              className="absolute w-[472px] h-[278px] top-[50%] translate-y-[-50%] left-[20%] translate-x-[-50%]"
            ></img>
            <img
              src={BgDesktop}
              className="absolute w-[50%] top-[45%] translate-y-[-50%] left-[20%] translate-x-[-50%]"
            ></img>
            <img
              src={BoxDesktop}
              className="absolute top-[55%] translate-y-[-50%] left-[-8%]"
            ></img>
          </div>
        )}

        <div className="p-5 lg:pr-[95px] lg:flex flex-col gap-[25px]">
          <h1 className="text-[32px] font-bold text-center lg:text-left">
            FAQ
          </h1>

          {/*Questions Container*/}
          <div className="flex flex-col ">
            {data.map((elem, index) => {
              return (
                <FAQItem
                  question={elem.question}
                  answer={elem.answer}
                  key={index}
                  isActive={activeIndex === index}
                  onClick={() => handleIsClicked(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
