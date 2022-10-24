import { Button, Icon, Text } from "../../components/index.js";
import { useState } from "react";
import clsx from "clsx";

const Projects = () => {
  // TODO - eger proje ekelendi ise <Redirect to={`/projects/${ilk projenin adi}`} /> yap
  // TODO - eger proje ekelendikten sonra butun projeler silinirse ikinci versiyon bos sayfayi goster

  const openAddNewProjectModal = () => console.log("openAddNewProjectModal");

  const [virgin, setDirty] = useState(true);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <Icon purpose={clsx("create-project", virgin ? 1 : 2)} />

      <Text className="text-primary text-2xl font-semibold">
        {virgin ? "Hey there" : "Where have you been"}
      </Text>

      <Text
        markdown
        className="prose-p:text-center text-tGray-400 prose-p:text-lg pb-2"
      >
        {virgin
          ? "You have no projects in your list lets begin with a new one"
          : "Wanna recreate a project Add a task"}
      </Text>

      <div className="max-w-[280px] w-full">
        <Button onClick={openAddNewProjectModal} purpose="blue">
          Create a project
        </Button>
      </div>
    </div>
  );
};

export default Projects;
