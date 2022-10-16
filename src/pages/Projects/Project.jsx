import {
  Icon,
  ProjectHeader,
  TrackerBar,
  Text,
  Table,
} from "../../components/index.js";

const activities = [
  {
    name: "thisMonth",
    month: "Project 1",
    monthlyTotal: "0:00:00",
    list: [
      {
        activityDescription: "Worked on login pages",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
      {
        activityDescription:
          "Ux call with team about severe different problems",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
      {
        activityDescription: "",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
      {
        activityDescription: "Worked on login pages",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
    ],
  },

  {
    name: "november",
    month: "November, 2019",
    monthlyTotal: "0:00:00",
    list: [
      {
        activityDescription: "Worked on login pages",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
      {
        activityDescription:
          "Ux call with team about severe different problems",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
      {
        activityDescription: "",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
      {
        activityDescription: "Worked on login pages",
        date: "16/12/2019",
        time: "11:32pm - 11:54pm",
        loggedHour: "0:21:54",
        isChecked: false,
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className=" flex flex-col h-full">
      <ProjectHeader />
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
              activityList={activity.list}
              month={activity.month}
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
