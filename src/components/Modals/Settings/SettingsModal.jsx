import * as React from "react";
import { useEffect, useState } from "react";
import tabs from "./tabs.jsx";
import Modal from "../index.jsx";
import { Dialog } from "@headlessui/react";
import { Button } from "../../index.js";

import SettingsModalNavLinks from "./SettingsModalNavLinks.jsx";

const SettingsModal = ({ isOpen, setIsOpen }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const Component = tabs[selectedTab].component;

  const label = tabs[selectedTab].label;

  const logout = () => console.log("logout");

  useEffect(() => {
    setSelectedTab(0);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Dialog.Panel className="mx-auto w-full h-full max-w-[1000px] max-h-[600px]">
        <div className="flex flex-row bg-white rounded-lg h-full">
          <div className="flex flex-col justify-between rounded-l-lg bg-tGray-200 min-w-[250px] pb-6 ">
            <div>
              <div className="flex w-full h-5 my-3 px-6 justify-between items-center text-tGray-500 font-normal  text-sm">
                ayda@earthr.com
              </div>
              <SettingsModalNavLinks
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabs={tabs}
              />
            </div>
            <div className="px-5">
              <Button leftIcon="logout" purpose="logout" onClick={logout}>
                Log out
              </Button>
            </div>
          </div>

          <div className="p-6 w-full">
            <Component label={label} setModal={setIsOpen} />
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default SettingsModal;
