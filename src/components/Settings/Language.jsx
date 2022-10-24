import * as React from "react";
import { Text, Select } from "../index.js";

const Language = ({ label }) => {
  return (
    <div className="flex flex-col">
      <Text className="text-base font-medium text-tGray-700">{label}</Text>
      <div className="mt-6 flex justify-between items-start">
        <div className="flex flex-col w-full">
          <Text className="text-sm font-medium  mb-1 Gray-700">Language </Text>

          <Text className="text-sm font-normal text-tGray-400 ">
            Change the language used in the user interface
          </Text>
        </div>
        <div className="max-w-[120px] min-w-[120px]">
          <Select
            onChange={() => {}}
            options={[{ value: "English" }]}
            defaultValue={{ value: "English" }}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Language;
