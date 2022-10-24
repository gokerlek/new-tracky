import * as React from "react";
import { useState } from "react";
import clsx from "clsx";

const Toggle = ({ onClick }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    onClick && onClick();
  };

  return (
    <div
      onClick={handleToggle}
      className={clsx(
        "ml-auto pointer-events-auto h-6 w-11 rounded-full p-0.5  transition duration-200 ease-in-out",
        {
          "bg-primary ": toggle,
          "bg-tGray-350 ": !toggle,
        }
      )}
    >
      <div
        className={clsx(
          "h-5 w-5 rounded-full bg-white shadow-toggle transition duration-200 ease-in-out",
          { "translate-x-5": toggle }
        )}
      ></div>
    </div>
  );
};

export default Toggle;
