import * as React from "react";
import { Toggle, Text } from "../index.js";

const MyNotifications = ({ label }) => {
  return (
    <div>
      <Text className="text-base font-medium text-tGray-700">{label}</Text>
      <div className="mt-6">
        <Text className="text-sm font-medium  mb-1 Gray-700">
          Desktop push notifications
        </Text>

        <div className="flex gap-3 w-full items-end">
          <Text className="text-sm font-normal text-tGray-400">
            Let us send you push notifications on mentions and comments
            immediately via your desktop app
          </Text>

          <Toggle onClick={() => {}} />
        </div>
      </div>

      <div className="mt-6">
        <Text className="text-sm font-medium  mb-1 Gray-700">
          Email notifications
        </Text>

        <div className="flex gap-3 w-full items-end">
          <Text className="text-sm font-normal text-tGray-400 ">
            Receive push notifications from us on mentions and comments
            immediately via your desktop app
          </Text>

          <Toggle onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MyNotifications;
