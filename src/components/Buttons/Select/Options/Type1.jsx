import React from "react";
import clsx from "clsx";

const Type1 = ({ data, selectedOption, controlledOnClick }) => {
  return data.map((option) => {
    const isSelected = selectedOption.some((item) => item.id === option.id);

    return (
      <div
        key={option.id}
        onClick={controlledOnClick(option)}
        className={clsx(
          "flex flex-row items-center justify-start gap-2 text-[12px] w-full pl-[20px] pr-[12px] py-[8px] cursor-pointer text-mGray-850 hover:bg-mGray-50",
          {
            "bg-mGray-50": isSelected,
          }
        )}
      >
        <span className={`${isSelected ? "font-medium" : "font-normal"} `}>
          {option.value}
        </span>
      </div>
    );
  });
};

export default Type1;
