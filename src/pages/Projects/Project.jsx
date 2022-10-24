import {
  Icon,
  PageNavigator,
  TrackerBar,
  Text,
  Table,
} from "../../components/index.js";
import { activities } from "../../data/dummyData.js";

const Projects = () => {
  return (
    <div className=" flex flex-col h-full">
      <PageNavigator purpose="project" />
      <TrackerBar />

      {activities.length === 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center  gap-5">
          <Icon purpose="no-activity" />
          <Text className="text-xl text-tGray-700 font-medium">
            No activity logged yet
          </Text>
        </div>
      )}

      <div className=" h-full w-full overflow-y-auto mt-4">
        <div className="flex flex-col gap-5">
          {activities.map((activity, index) => (
            <Table
              key={index}
              purpose="project"
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

export default Projects;
