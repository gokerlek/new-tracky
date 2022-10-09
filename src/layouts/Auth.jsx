import { Outlet } from "react-router-dom";
import * as React from "react";
import { Icon } from "../components/index.js";
import clsx from "clsx";

const AuthLayout = ({ login = true }) => {
  return (
    <div className=" flex w-screen h-screen ">
      <div
        className={clsx("w-screen h-screen  relative", {
          "w-1/2 bg-white ": login,
          "w-screen bg-tBaseColor": !login,
        })}
      >
        <div
          className={clsx(
            "flex items-center justify-center  h-24 shadow bg-white",
            {
              "w-full": login,
              "w-screen ": !login,
            }
          )}
        >
          <Icon purpose="o-tracky" />
        </div>

        <Outlet />
      </div>

      {login && (
        <div className="w-1/2 h-screen bg-tBaseColor flex flex-col justify-center items-center z-1">
          <Icon purpose="sign-up" />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
