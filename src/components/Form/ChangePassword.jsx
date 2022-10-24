import { useForm } from "react-hook-form";
import { Button, Input, Text } from "../index.js";

const ChangePasswordForm = ({ setIsOpen, setSuccess }) => {
  const { handleSubmit, control, register } = useForm({
    reValidateMode: "onChange",
    delayError: 3000,
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(true);

    setTimeout(() => {
      setIsOpen(false);
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      <Text className="text-xl font-medium text-tGray-700">
        Change password
      </Text>

      <Input purpose="currentPassword" control={control} register={register} />

      <Input purpose="newPassword" control={control} register={register} />

      <Input
        purpose="confirmNewPassword"
        control={control}
        register={register}
      />

      <Button purpose="blue" onClick={handleSubmit(onSubmit)}>
        Update Password
      </Button>

      <Text
        onClick={() => setIsOpen(false)}
        className="text-base font-medium text-tGray-700 text-center cursor-pointer"
      >
        Cancel
      </Text>
    </div>
  );
};

export default ChangePasswordForm;
