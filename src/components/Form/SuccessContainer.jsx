import { Icon, Text } from "../index.js";

const SuccessContainer = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Icon purpose={icon} />
      <Text className="text-center text-tGray-700 font-semibold text-2xl mt-5">
        {title}
      </Text>
      <Text className="text-center text-tGray-400 font-normal text-lg">
        {description}
      </Text>
    </div>
  );
};

export default SuccessContainer;
