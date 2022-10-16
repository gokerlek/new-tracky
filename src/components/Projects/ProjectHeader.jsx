import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Text } from "../index.js";
import clsx from "clsx";

const projectsList = ["book", "map", "calendar", "clock"]; // TODO : contexten proje listelsi gelecek

const ProjectHeader = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const addFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const nextProject = () =>
    count < projectsList.length - 1 && setCount(count + 1);

  const previousProject = () => count > 0 && setCount(count - 1);

  const openShareModal = () => console.log("openShareModal");

  useEffect(() => {
    navigate(`/projects/${projectsList[count]}`);
  }, [count]);

  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <div className="flex items-center h-full">
        <Icon
          className={clsx(count > 0 && "animate-bigger-125")}
          onClick={previousProject}
          purpose="left"
        />

        <Icon
          className={clsx(
            count < projectsList.length - 1 && "animate-bigger-125"
          )}
          onClick={nextProject}
          purpose="right"
        />

        <Text className="ml-2 text-sm text-primary capitalize">
          {projectsList[count]}
        </Text>
      </div>

      <div className="flex items-center h-10 bg-white rounded-lg border border-border">
        <div
          onClick={openShareModal}
          className="flex border-r border-border items-center h-full gap-2 px-3 animate-bigger cursor-pointer"
        >
          <Icon purpose="share" />

          <Text className="text-sm text-primary ">Share</Text>
        </div>

        <Icon
          onClick={addFavorite}
          className="mx-3 w-[18px] h-full flex items-center animate-bigger-125 cursor-pointer"
          purpose={clsx("star", isFavorite && "full")}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
