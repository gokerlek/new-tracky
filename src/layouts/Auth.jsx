import { Outlet } from "react-router-dom";
import * as React from "react";
import { Icon } from "../components/index.js";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { ReactComponent as Paper } from "../assets/icons/auth/signUp/Paper.svg";

const AuthLayout = ({ login }) => {
  const { t } = useTranslation();

  return (
    <div className=" flex w-screen h-screen relative ">
      <div
        className={clsx(
          " h-full flex flex-col items-center justify-center pt-24",
          {
            "w-1/2 bg-white ": login,
            "w-screen bg-tBaseColor": !login,
          }
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center  h-24 shadow bg-white fixed top-0 z-30",
            {
              "w-1/2 ": login,
              "w-screen ": !login,
            }
          )}
        >
          <Icon purpose="o-tracky" />
        </div>

        <Outlet />
        <div
          className={clsx(
            "absolute bottom-4 left-0 gap-1 flex items-center text-sm text-tGray-500  justify-center ",
            {
              "w-1/2": login,
              "w-screen": !login,
            }
          )}
        >
          <span>{t("Your data is safe with us")}</span>
          <span className="text-primary font-medium cursor-pointer animate-bigger">
            {t("Security Privacy")}
          </span>
        </div>
      </div>

      {login && (
        <div className="w-1/2 h-screen bg-tBaseColor flex flex-col gap-5 justify-center items-end pl-10 max-h-[800px">
          <div className="flex flex-col items-start pl-12 gap-5 text-t900  text-lg">
            <div className="inline text-4xl text-primary font-semibold gap-2 prose-strong:text-tOrange-500">
              {t("A new time management tool youll actually love")}{" "}
              <span className="text-tOrange-500">{t("actually love")}</span>{" "}
              <Paper className="inline" />
            </div>

            {t(
              "Functional and practical Start tracking your progress in the most efficient way possible"
            )}
          </div>
          <Icon purpose="sign-up" width={"100%"} />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
