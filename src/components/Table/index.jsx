import Header from "./Header.jsx";
import Body from "./Body.jsx";
import { useForm } from "react-hook-form";
import Text from "../Text.jsx";

const Table = ({ activityList, month, monthlyTotal, name }) => {
  const { handleSubmit, control, setValue, watch } = useForm({
    defaultValues: { [name]: activityList },
  });

  const data = watch(name);

  console.log(watch());

  return (
    data?.length > 0 && (
      <div className="flex flex-col w-full h-full min-w-[1000px]">
        <div className="flex items-center justify-between  mt-2 pt-6 mb-6">
          <div className="text-tGray-700 font-medium">{month}</div>
          <div className="flex items-center text-tGray-700 font-medium gap-1">
            <Text className="text-tGray-600">Monthly total</Text>
            {monthlyTotal}
          </div>
        </div>

        <Header control={control} setValue={setValue} name={name} />
        <Body control={control} setValue={setValue} name={name} />
      </div>
    )
  );
};

export default Table;
