import Arrow from "./../assets/images/icon-arrow-down.svg";

const FAQItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="border-b-2 py-4 w-full flex flex-col overflow-hidden">
      <div className="flex flex-row justify-between items-center mb-3">
        <p
          className={`text-[13px] ${
            isActive ? "font-bold text-[#1E1F36]" : "text-[#4B4C5F]"
          } cursor-pointer hover:text-[#F47B56] lg:text-[14px]`}
        >
          {question}
        </p>
        <img
          src={Arrow}
          className={`w-[10px] h-[5px] duration-200 transform ${
            isActive ? "rotate-180" : ""
          }`}
          onClick={onClick}
        ></img>
      </div>

      {/*FAQ Answer*/}

      <div
        className={`${
          isActive ? "block" : "hidden"
        } transition-all duration-300 ease-in-out h-full overflow-hidden`}
      >
        <p className="text-[13px] lg:text-[14px] text-[#787887]">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
