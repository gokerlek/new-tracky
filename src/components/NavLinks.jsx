import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Text, ProfileModal } from "./index.js";
import clsx from "clsx";

const NavLinks = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const linkBaseClassName = (isActive, conditional) =>
    clsx(
      " flex flex-row items-center justify-start gap-3 h-8 px-5 text-base text-tGray-500 hover:text-tGray-700 hover:bg-tGray-100 ",
      {
        "bg-tGray-100 text-tGray-700": isActive,
        "justify-start": !conditional,
        "justify-between": conditional === "between",
      }
    );

  return (
    <ul className="flex flex-col gap-2 mt-4">
      <li>
        <NavLink
          className={linkBaseClassName(false, "between")}
          to="#"
          onClick={() => setIsOpenProfile(true)}
        >
          <div className="flex items-center justify-start gap-3 w-full">
            <Icon purpose="profile" />
            <Text className="animate-translate h-full w-full">Kisi adi</Text>
          </div>
          <Icon purpose="right" />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to="/search"
        >
          <Icon purpose="search" />
          <Text className="animate-translate h-full w-full items-center flex">
            Quick search
          </Text>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to="/reports"
        >
          <Icon purpose="reports" />
          <Text className="animate-translate h-full w-full items-center flex">
            Reports
          </Text>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to="/archive"
        >
          <Icon purpose="archive" />
          <Text className="animate-translate h-full w-full items-center flex">
            Archive
          </Text>
        </NavLink>
      </li>
      <ProfileModal isOpen={isOpenProfile} setIsOpen={setIsOpenProfile} />
    </ul>
  );
};

export default NavLinks;
