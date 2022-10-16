import { NavLink } from "react-router-dom";
import { Icon, Text } from "../index.js";
import clsx from "clsx";

const List = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index} className="relative">
          <NavLink
            key={index}
            to={`projects/${item}`}
            className={({ isActive }) =>
              clsx(
                "flex flex-row justify-between items-center h-10 border-t border-border px-5 hover:bg-tGray-100 ",
                {
                  "bg-tGray-100 text-tGray-700": isActive,
                }
              )
            }
          >
            {({ isActive }) => (
              <div className="flex flex-row items-center gap-2 pl-2 w-full h-full  mr-5 ">
                <Icon
                  className="w-4 h-full flex items-center cursor-grab  animate-bigger-125"
                  purpose="drager"
                />

                <Text
                  className={clsx(
                    "text-tGray-700 font-medium h-full w-full flex items-center capitalize",
                    {
                      "animate-translate": !isActive,
                    }
                  )}
                >
                  {item}
                </Text>
              </div>
            )}
          </NavLink>

          <div
            className="absolute right-5  inset-y-0 flex items-center cursor-pointer"
            onClick={() => console.log(item)}
          >
            <Icon
              className="w-4 h-full flex items-center animate-bigger-125"
              purpose="ellipsis"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
