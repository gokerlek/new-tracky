import * as React from "react";
import { useState } from "react";
import { Text } from "../../index.js";
import clsx from "clsx";

const Navigation = ({ onChange }) => {
  const [selected, setSelected] = useState(1);
  const navigationData = [
    {
      id: 1,
      label: "Plans",
    },
    {
      id: 2,
      label: "Purchased",
    },
    {
      id: 3,
      label: "Invoice",
    },
  ];

  const handleClick = (id) => () => {
    setSelected(id);
    onChange(id);
  };

  return (
    <div className="flex flex-col my-7">
      <div className="flex flex-row justify-start">
        {navigationData.map((item) => {
          return (
            <Text
              key={item?.id}
              onClick={handleClick(item?.id)}
              className={clsx(
                "text-base font-medium text-tGray-700 w-32 text-center cursor-pointer",
                {
                  "text-tGray-700": selected === item?.id,
                  "text-tGray-600": selected !== item?.id,
                }
              )}
            >
              {item?.label}
            </Text>
          );
        })}
      </div>

      <div className="relative w-full h-1">
        <div className="absolute inset-x-0 top-[3px]  h-[1px] w-full bg-tGray-300"></div>
        <div
          className={clsx(
            "w-32  bg-tGray-700 h-[3px] absolute inset-x-0 top-1/2",
            {
              "translate-x-0": selected === 1,
              "translate-x-32": selected === 2,
              "translate-x-64": selected === 3,
            }
          )}
        ></div>
      </div>
    </div>
  );
};

export default Navigation;
