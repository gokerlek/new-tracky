import * as React from "react";
import {
  Button,
  ChangePassword,
  DeleteAccount,
  FormModal,
  Input,
  Text,
} from "../index.js";
import Icon from "../Icon.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";

const MyAccount = ({ setModal }) => {
  const { handleSubmit, control, register } = useForm({
    reValidateMode: "onChange",
    delayError: 3000,
    defaultValues: {},
  });

  const update = (data) => {
    console.log(data);
  };

  const closeModal = () => {
    setModal(false);
  };

  const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] =
    useState(false);

  const openChangePasswordModal = () => {
    setIsOpenChangePasswordModal(true);
  };

  const [isOpenDeleteAccountModal, setIsOpenDeleteAccountModal] =
    useState(false);

  const openDeleteAccountModal = () => {
    setIsOpenDeleteAccountModal(true);
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <Text className="text-base font-medium text-tGray-700">
          Profile Image
        </Text>

        {/** @description: This is a button that will open a modal to change the user's profile image. */}

        <div className="my-4 flex gap-4">
          <div className="min-w-[88px] min-h-[88px] w-[88px] flex items-center justify-center  rounded bg-tGray-200 ">
            <Icon purpose="s-tracky" />
          </div>

          <div className="flex flex-col justify-between items-start w-full">
            <Text
              className="text-xs font-normal text-tGray-400 max-w-[340px]"
              markdown
            >
              Company logo will appear in shared reports and branded PDF exports
              Formats png jpg gif Max size 1MB
            </Text>
            <Button purpose="white" onClick={() => {}}>
              Upload image
            </Button>
          </div>
        </div>

        {/** @description: This input will be used to change the user's preferred name. */}

        <Input
          purpose="preferredName"
          control={control}
          register={register}
          darkLabel
        />

        {/** @description: This is a button that will open a modal to change the user's password. */}

        <div className="mt-6">
          <Text className="text-sm font-medium  mb-1 Gray-700">Password</Text>
          <Text className="text-sm font-normal text-tGray-400 mb-4 ">
            You can set a permanent password if you dont want to use temporary
            login codes
          </Text>
          <Button purpose="white" onClick={openChangePasswordModal}>
            Change Password
          </Button>
        </div>

        {/** @description: This is a button that will open a modal to delete the user's account. */}

        <div className="mt-6">
          <Text className="text-sm font-medium  mb-1 Gray-700">
            Delete Account
          </Text>
          <Text className="text-sm font-normal text-tGray-400 mb-4 ">
            All your profile and learning data will be permanently deleted
          </Text>
          <Button purpose="white" onClick={openDeleteAccountModal}>
            Delete My Account
          </Button>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-10 pt-5 border-t border-border -mx-6 px-6">
        <Button purpose="blue" onClick={handleSubmit(update)} height={38} fit>
          Update
        </Button>
        <Button purpose="white" onClick={closeModal}>
          Cancel
        </Button>
      </div>

      <FormModal
        form={ChangePassword}
        isOpen={isOpenChangePasswordModal}
        setIsOpen={setIsOpenChangePasswordModal}
        successPurpose="password-updated"
      />
      <FormModal
        form={DeleteAccount}
        isOpen={isOpenDeleteAccountModal}
        setIsOpen={setIsOpenDeleteAccountModal}
        successPurpose="account-deleted"
      />
    </div>
  );
};

export default MyAccount;
