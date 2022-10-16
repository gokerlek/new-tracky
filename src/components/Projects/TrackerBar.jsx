import { useState } from "react";
import { useMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Dropdown, Icon, Text } from "../index.js";

const TrackerBar = () => {
  const match = useMatch("projects/:projectName");

  const { t } = useTranslation();

  const projectName = match?.params?.projectName;

  const [isPlaying, setIsPlaying] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const taskName = watch("taskName");

  const freeProjectCount = 1; //TODO: get from context

  const totalHours = "0:00:00"; //TODO: get from context

  const totalEarned = "20"; //TODO: get from context

  const download = () => console.log("download");

  const playPause = () => {
    setIsPlaying(!isPlaying);
    console.log("playPause");
  };

  const options = [
    { label: "Edit details", action: () => console.log("edit") },
    { label: "Archive", action: () => console.log("archive") },
    { label: "Clear all history", action: () => console.log("clear") },
    { label: "Delete project", action: () => console.log("delete") },
  ];

  return (
    <div className="flex flex-col w-full bg-white rounded-lg border border-border">
      <div className="flex justify-between w-full px-6 py-3 border-b border-border">
        <div className="text-2xl text-primary font-medium capitalize">
          {projectName}
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex gap-1 rounded bg-tPurple-300 py-1.5 px-2.5 items-center">
            <Icon purpose="smile" />

            <div className="text-sm text-tGray-700 font-medium">
              {freeProjectCount}
            </div>

            <Text className="text-sm text-tGray-700 font-medium">
              free project
            </Text>
          </div>

          <div className="flex px-4 py-1.5 rounded bg-tGray-200 gap-2">
            <Text className="text-sm text-tGray-600 font-medium">
              Total logged hours
            </Text>

            <div className="text-sm text-tGray-700 font-medium">
              {totalHours}
            </div>
          </div>

          <div className="flex px-4 py-1.5 rounded bg-tGray-200 gap-2">
            <Text className="text-sm text-tGray-600 font-medium">Earned</Text>

            <div className="text-sm text-tGray-700 font-medium">
              ${totalEarned}
            </div>
          </div>

          <Icon
            className="animate-bigger-125 cursor-pointer"
            purpose="download"
            onClick={download}
          />

          <Dropdown options={options} />
        </div>
      </div>
      <div className="flex flex-row w-full p-6 gap-12 items-center ">
        <input
          type="text"
          className={clsx(
            "rounded-lg border border-border py-4 px-6 placeholder:text-tGray-600 text-[20px] leading-9 w-full ",
            {
              "bg-tGray-100": !taskName?.length > 0,
              "bg-white": taskName?.length > 0,
            }
          )}
          placeholder={t("What are you working on")}
          {...register("taskName")}
        />
        <div className="flex flex-row gap-10 items-center pr-6 ">
          <div> 00:00 </div>

          <Icon onClick={playPause} purpose={isPlaying ? "pause" : "play"} />

          <Icon purpose="calender" />
        </div>
      </div>
    </div>
  );
};

export default TrackerBar;
