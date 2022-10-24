import * as React from "react";
import { useState } from "react";

import Modal from "./index.jsx";
import { Dialog } from "@headlessui/react";
import SuccessContainer from "../Form/SuccessContainer.jsx";
import useSuccessData from "../Form/useSuccessData.jsx";
import clsx from "clsx";

const FormModal = ({ isOpen, setIsOpen, form, successPurpose }) => {
  const Form = form;
  const [success, setSuccess] = useState(false);

  const { title, description, icon } = useSuccessData(successPurpose);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Dialog.Panel
        className={clsx("mx-auto w-full h-fit  mix-h-[200px]", {
          "max-w-[430px]": !success,
          "max-w-[490px]": success,
        })}
      >
        <div className="flex flex-row bg-white rounded-lg h-full">
          <div className="p-10 w-full">
            {!success && <Form setIsOpen={setIsOpen} setSuccess={setSuccess} />}

            {success && (
              <SuccessContainer
                title={title}
                description={description}
                icon={icon}
              />
            )}
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default FormModal;
