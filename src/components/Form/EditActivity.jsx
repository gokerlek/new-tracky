import { useForm } from "react-hook-form";
import { Button, Input, Text } from "../index.js";

const EditActivity = ({ setIsOpen, setSuccess }) => {
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
      <Text className="text-xl font-medium text-tGray-700">
        Edit activity details
      </Text>
      <Input
        purpose="activityDescription"
        control={control}
        register={register}
      />
      <div className="flex gap-4">
        <Input purpose="startDate" control={control} register={register} />
        <Input purpose="duration" control={control} register={register} />
      </div>

      <div className="flex gap-4">
        <Input purpose="workedFrom" control={control} register={register} />
        <Input purpose="to" control={control} register={register} />
      </div>

      <Button purpose="blue" onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </div>
  );
};

export default EditActivity;
