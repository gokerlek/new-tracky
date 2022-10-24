import React from "react";
import Type1 from "./Type1";

const Type2 = ({ data2, selectedOption, controlledOnClick }) => {
  return data2.map((option2) => {
    return (
      <div key={option2.id} className="flex flex-col w-full">
        <div className="w-full min-h-[32px] bg-mPurple-100 pl-[20px] pr-[8px] py-[8px] text-[12px] text-mGray-850">
          {option2.name}
        </div>

        <Type1 data={option2.options} selectedOption={selectedOption} controlledOnClick={controlledOnClick} />
      </div>
    );
  });
};

export default Type2;
