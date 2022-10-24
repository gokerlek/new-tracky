import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import paths from "../paths.js";
import { FormModal, Icon, ShareLink, Text } from "./index.js";
import clsx from "clsx";

const projectsList = ["book", "map", "calendar", "clock"]; // TODO : contexten proje listelsi gelecek

const PageNavigator = ({ purpose }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const shareCondition = purpose === "project";

  const navigate = useNavigate();

  const location = useLocation();

  const projectPaths = projectsList.map((item) => {
    return { path: `/projects/${item}`, label: item };
  });

  const allPaths = [
    { path: paths.reports, label: paths.reports.replace("/", "") },
    { path: paths.archive, label: paths.archive.replace("/", "") },
    ...projectPaths,
  ];

  const findCount = allPaths.findIndex(
    (item) => item.path === location.pathname
  );

  const [count, setCount] = useState(findCount);

  useEffect(() => {
    setCount(findCount);
  }, [location.pathname]);

  const addFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const nextProject = () => count < allPaths.length - 1 && setCount(count + 1);

  const previousProject = () => count > 0 && setCount(count - 1);

  const openShareModal = () => setIsShareModalOpen(true);

  useEffect(() => {
    navigate(allPaths[count]?.path);
  }, [count]);

  return (
    <div className="flex flex-row justify-between items-center mb-4 min-h-[40px]">
      <div className="flex items-center h-full">
        <Icon
          className={clsx(count > 0 && "animate-bigger-125")}
          onClick={previousProject}
          purpose="left"
        />

        <Icon
          className={clsx(count < allPaths?.length - 1 && "animate-bigger-125")}
          onClick={nextProject}
          purpose="right"
        />

        <Text className="ml-2 text-sm text-primary capitalize">
          {allPaths[count]?.label ?? ""}
        </Text>
      </div>

      {shareCondition && (
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
      )}

      <FormModal
        form={ShareLink}
        isOpen={isShareModalOpen}
        setIsOpen={setIsShareModalOpen}
        successPurpose="default"
      />
    </div>
  );
};

export default PageNavigator;
