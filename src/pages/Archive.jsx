import {
  Icon,
  Text,
  Table,
  PageNavigator,
  FilterProjects,
} from "../components/index.js";
import { activities } from "../data/dummyData.js";

const Archive = () => {
  return (
    <div className=" flex flex-col h-full">
      <PageNavigator purpose="archive" />
      <div className="flex items-center justify-between w-full flex-1">
        <Text className={"text-xl font-medium"}>Archive</Text>
        <FilterProjects />
      </div>

      {activities.length === 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center  gap-5">
          <Icon purpose="no-activity" />
          <Text className="text-xl text-tGray-700 font-medium">
            No activity logged yet
          </Text>
        </div>
      )}

      <div className=" h-full w-full overflow-y-auto ">
        <div className="flex flex-col gap-2">
          {activities.map((activity, index) => (
            <Table
              key={index}
              purpose="archive"
              activityList={activity.list}
              title={activity.title}
              monthlyTotal={activity.monthlyTotal}
              name={activity.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
