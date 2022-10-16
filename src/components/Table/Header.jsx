import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { Button, Text, Checkbox } from "../index.js";
import clsx from "clsx";

const textClassName = "text-left text-sm  text-tGray-800 font-medium";

const TableHeader = ({ control, setValue, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const data = useWatch({ control, name: name });

  const handleTrash = () => {
    setIsChecked(false);
    setValue("data", filteredData);
  };

  const selectDeselectAll = () => {
    setIsChecked(!isChecked);
    setValue(
      "data",
      data.map((item) => ({ ...item, isChecked: !isChecked }))
    );
  };

  useEffect(() => {
    data?.some((item) => item.isChecked)
      ? setIsDisabled(true)
      : setIsDisabled(false);
    setFilteredData(data?.filter((item) => item.isChecked === false));
  }, [data]);

  return (
    <div className="flex flex-row items-center justify-start w-full rounded-t-lg bg-white h-16 px-6 py-5">
      <Checkbox onChange={selectDeselectAll} isChecked={isChecked} table />

      <Text className={clsx(textClassName, "ml-4 w-[34%] ")}>
        ACTIVITY DESCRIPTION
      </Text>

      <Text className={clsx(textClassName, "w-[18%] ")}>DATE</Text>

      <Text className={clsx(textClassName, " w-[18%] ")}>TIME</Text>

      <Text className={clsx(textClassName, "w-[18%] ")}>LOGGED HOUR</Text>

      <div className="w-[8%] ">
        <Button
          leftIcon="archive-2"
          purpose="archive"
          disabled={!isDisabled}
          onClick={handleTrash}
        >
          archive
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;
