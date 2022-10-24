import * as React from "react";
import clsx from "clsx";
import { Icon, Text } from "../../index.js";

const SettingsModalNavLinks = ({ selectedTab, setSelectedTab, tabs }) => {
  const setActive = (selectedTab) => () => setSelectedTab(selectedTab);

  const linkBaseClassName = (isActive) =>
    clsx(
      " flex flex-row items-center justify-start gap-3 h-8 px-5 text-sm font-normal text-tGray-500 hover:text-tGray-700 hover:bg-tGray-300 cursor-pointer ",
      {
        "bg-tGray-300 text-tGray-700": isActive === selectedTab,
      }
    );

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {tabs.map((tab, index) => (
        <li key={index}>
          <div onClick={setActive(index)} className={linkBaseClassName(index)}>
            <Icon purpose={tab.icon} />
            <Text className="animate-translate h-full w-full items-center flex">
              {tab.label}
            </Text>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SettingsModalNavLinks;
