import { Checkbox, Icon, Dropdown } from "../index";
import { useFieldArray } from "react-hook-form";
import clsx from "clsx";

const TableBody = ({ control, name }) => {
  const { fields, remove, update } = useFieldArray({ control, name: name });

  const handleCheck = (index) => {
    update(index, { ...fields[index], isChecked: !fields[index].isChecked });
  };

  const descriptionCondition = (item) =>
    !!(item.activityDescription || item.activityDescription !== "");

  const editData = (index) => {
    return [
      {
        label: "Archive",
        action: () => {
          console.log("Option 1");
        },
      },
      {
        label: "Delete activity",
        action: () => remove(index),
      },
    ];
  };

  return fields?.map((item, index) => {
    return (
      <div
        key={item.id}
        className={clsx(
          "flex flex-row items-start justify-start w-full border-t-[1px] border-t400 px-6 py-5 font-light text-tGray-700",
          {
            "bg-t100 ": index % 2 === 0,
            "bg-white": !(index % 2 === 0),
            "rounded-b-lg": index === fields.length - 1,
          }
        )}
      >
        <div className="flex items-start pt-1 h-full">
          <Checkbox
            onChange={() => handleCheck(index)}
            isChecked={item.isChecked}
            initialState={item.isChecked}
          />
        </div>

        <div
          className={clsx("ml-4 w-[34%] pr-2", {
            "text-tGray-600": !descriptionCondition(item),
          })}
        >
          {descriptionCondition(item)
            ? item.activityDescription
            : "Unnamed activity"}
        </div>

        <div className="w-[18%]">{item.date}</div>

        <div className="w-[18%] text-tGray-600">{item.time}</div>

        <div className="w-[18%]">{item.loggedHour}</div>

        <div className="flex flex-row items-start justify-end gap-8 w-[8%]">
          <Icon purpose="edit" />

          <Dropdown options={editData(index)} />
        </div>
      </div>
    );
  });
};

export default TableBody;
