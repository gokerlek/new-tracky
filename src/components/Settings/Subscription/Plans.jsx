import { Button, Text } from "../../index.js";
import Icon from "../../Icon.jsx";

const Plans = () => {
  return (
    <div className="flex flex-col w-full items-center gap-1">
      <Text className="font-bold text-lg">Pricing Plans</Text>
      <Text className="text-sm font-normal text-tGray-400">
        Pay for what you need and benefit from the features you ll use the most
      </Text>
      <div className="flex gap-4 w-full mt-4">
        <div className="flex flex-col border border-border rounded-xl bg-white divide-y divide-border w-full">
          <div className="flex flex-col items-start gap-4 p-4">
            <Text className="text-sm font-medium text-tGray-700 bg-tGray-300 px-3 py-1 rounded">
              Free
            </Text>

            <div className="flex justify-start items-start text-tGray-700">
              <Text className="text-base font-semibold ">$</Text>
              <Text className="text-[32px] font-semibold leading-7">0</Text>
              <Text className="text-xs font-medium">/one project</Text>
            </div>

            <Text className="text-sm font-normal text-tGray-400">
              Try out Tracky with creating only one project and see how it goes
            </Text>
          </div>

          <div className="flex flex-col items-start gap-1 px-4 pb-4 pt-3 text-sm text-tGray-700 font-medium ">
            <div className="flex  items-center gap-1">
              <Icon purpose="check" />
              <Text markdown>Single project available</Text>
            </div>

            <div className="flex  items-center gap-1">
              <Icon purpose="check" />
              <Text markdown>Time tracker</Text>
            </div>

            <div className="flex  items-center gap-1">
              <Icon purpose="check" />
              <Text markdown className="mb-2">
                Reports
              </Text>
            </div>

            <Button
              purpose="blue"
              height={38}
              onClick={() => console.log("clicked")}
            >
              Get started free
            </Button>
          </div>
        </div>

        <div className="flex flex-col border border-border rounded-xl bg-primary divide-y divide-border w-full">
          <div className="flex flex-col items-start gap-4 p-4">
            <Text className="text-sm font-medium text-tGray-700 bg-tGreen-100 px-3 py-1 rounded">
              Tracking
            </Text>
            <div className="flex justify-start items-start text-white">
              <Text className="text-base font-semibold ">$</Text>
              <Text className="text-[32px] font-semibold leading-7">2</Text>
              <Text className="text-xs font-medium">/one project</Text>
            </div>

            <Text className="text-sm font-normal text-white mb-5">
              Only for Tracking project
            </Text>
          </div>

          <div className="flex flex-col items-start gap-1 px-4 pb-4 pt-3 text-sm text-white font-medium ">
            <div className="flex  items-center gap-1">
              <Icon purpose="check" />
              <Text markdown>As many projects as you want</Text>
            </div>
            <div className="flex  items-center gap-1">
              <Icon purpose="check" />
              <Text markdown>Time tracker per project</Text>
            </div>
            <div className="flex  items-center gap-1">
              <Icon purpose="check" />
              <Text markdown className="mb-2">
                Reports
              </Text>
            </div>

            <Button purpose="whiteFull" onClick={() => console.log("clicked")}>
              Choose Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
