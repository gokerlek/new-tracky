import * as React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Button,
  NewProject,
  FormModal,
  Icon,
  NavLinks,
} from "../components/index.js";
import Projects from "../components/Projects/index.jsx";

const Layout = () => {
  const [isOpenNewProject, setIsOpenNewProject] = useState(false);

  const openAddNewProjectModal = () => {
    setIsOpenNewProject(true);
  };

  return (
    <div className="flex flex-row bg-tBaseColor h-screen">
      <nav className="flex flex-col justify-between bg-white min-w-[250px] pb-6 ">
        <div>
          <div className="flex w-full h-14 border-b border-border pl-3 pr-4 justify-between items-center">
            <Icon purpose="s-tracky" />
            <Icon purpose="collapse" />
          </div>

          <NavLinks />

          <Projects />
        </div>
        <div className="px-5">
          <Button
            leftIcon="plus-bold"
            purpose="add-new-project"
            onClick={openAddNewProjectModal}
          >
            Add a new project
          </Button>

          <FormModal
            isOpen={isOpenNewProject}
            setIsOpen={setIsOpenNewProject}
            form={NewProject}
            successPurpose="new-project"
          />
        </div>
      </nav>

      <div className="py-4 px-12 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
