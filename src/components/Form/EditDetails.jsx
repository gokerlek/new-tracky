import { useForm } from "react-hook-form";
import { Button, Input, Text } from "../index.js";

const EditDetails = ({ setIsOpen, setSuccess }) => {
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
    <div className="flex flex-col gap-4">
      <Text className="text-xl font-medium text-tGray-700">Edit Details</Text>
      <Input purpose="projectName" control={control} register={register} />
      <div className="flex gap-4">
        <Input purpose="currency" control={control} register={register} />
        <Input purpose="hourlyRate" control={control} register={register} />
      </div>

      <Button purpose="blue" onClick={handleSubmit(onSubmit)}>
        Update details
      </Button>

      <Text
        onClick={() => setIsOpen(false)}
        className="text-base font-medium text-tGray-700 text-center cursor-pointer"
      >
        Do it later
      </Text>
    </div>
  );
};

export default EditDetails;
