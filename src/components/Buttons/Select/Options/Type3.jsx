import React from "react";
import Type2 from "./Type2";

const Type3 = ({ data3, selectedOption, controlledOnClick }) => {
  return data3.map((option3) => {
    if (option3.options.length > 0) {
      return (
        <div key={option3.id} className="flex flex-col w-full">
          <div className="w-full min-h-[32px]  pl-[20px] pr-[8px] py-[8px] text-[10px] font-[600] text-mGray-700 ">
            {option3.name}
          </div>

          <Type2 data2={option3.options} selectedOption={selectedOption} controlledOnClick={controlledOnClick} />
        </div>
      );
    }
  });
};

export default Type3;
