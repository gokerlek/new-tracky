import {
  Icon,
  Text,
  Table,
  PageNavigator,
  FilterProjects,
  Button,
} from "../components/index.js";
import { activities } from "../data/dummyData.js";
import { useState } from "react";

const Reports = () => {
  const [project, setProject] = useState({
    name: "",
    dates: "",
  });

  const onChange = (e) => {
    setProject({
      ...project,
      name: e.project?.value,
      dates: e.dates?.value,
    });
  };

  const projectCondition =
    project?.name?.length > 0 && project.dates?.length > 0;

  const SelectedProjectInfo = () => {
    return (
      <div className="flex items-center justify-start gap-1">
        <div className="w-3 h-3 bg-tGreen-100 rounded-full mr-1" />
        <div className="text-sm font-medium text-tGray-700">{project.name}</div>
        ,
        <div className="text-sm font-normal text-tGray-700">
          {project.dates}
        </div>
      </div>
    );
  };

  return (
    <div className=" flex flex-col h-full">
      <PageNavigator purpose="archive" />

      <div className="flex items-center justify-between w-full flex-1">
        <Text className={"text-xl font-medium"}>Reports</Text>
      </div>

      <div className="flex flex-col divide-y w-full bg-white shadow-card rounded-xl border border-border mt-6">
        <div className="flex items-start justify-between w-full p-6">
          <div className="flex flex-col gap-5 items-start">
            <Text className={"text-xl font-medium"}>Projects</Text>
            <FilterProjects onChange={onChange} />
          </div>

          <div className="p-3 pr-5 flex gap-3 bg-tGray-200 rounded-full min-w-[250px] w-fit ">
            <div className="flex items-center justify-center bg-white border-4 border-tGreen-100 text-3xl font-medium rounded-full min-w-[64px] min-h-[64px]">
              $
            </div>

            <div className="flex flex-col justify-between py-1">
              <Text className="text-sm font-medium text-tGray-400">
                {activities.length > 0 ? "Earned" : "Total earned"}
              </Text>

              <Text className="text-2xl font-medium text-tGray-700">0.00</Text>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-6 py-3">
          {projectCondition ? (
            <SelectedProjectInfo />
          ) : (
            <Text className="text-base text-tGray-600 font-medium">
              "No selected projects"
            </Text>
          )}
          <Button
            purpose="blue"
            leftIcon={{ purpose: "download", className: "mr-2 text-white" }}
            fit
            disabled={!projectCondition}
          >
            Export as PDF
          </Button>
        </div>
      </div>

      {activities.length === 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center  gap-5">
          <Icon purpose="no-selected-project" />
          <Text
            className="text-xl text-tGray-700 font-medium text-center"
            markdown
          >
            View and download the details of selected project
          </Text>
        </div>
      )}

      {activities.length > 0 && (
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
      )}
    </div>
  );
};

export default Reports;
