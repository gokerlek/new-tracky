import * as React from "react";
import { Icon, Text } from "../index.js";
import List from "./List.jsx";

const data = ["book", "map", "calendar", "clock"];

const Projects = () => {
  const openAddNewProjectModal = () => console.log("openAddNewcccProjectModal");

  return (
    <div className="mt-14 min-h-[40px] border-y border-border">
      <div className="flex flex-row items-center justify-between py-2 px-5">
        <div className="flex flex-row items-center gap-3">
          <Icon purpose="down-bold" />

          <Text className="text-tGray-500 font-medium">Projects</Text>
        </div>

        <Icon
          onClick={openAddNewProjectModal}
          className="w-4 h-4 animate-bigger-125 cursor-pointer"
          purpose="plus"
        />
      </div>

      <List list={data} />
    </div>
  );
};

export default Projects;
