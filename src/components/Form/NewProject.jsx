import Icon from "../Icon.jsx";
import { useForm } from "react-hook-form";
import { Button, Input, Text } from "../index.js";

const NewProject = ({ setIsOpen, setSuccess }) => {
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
      <Icon purpose="new-project" />
      <Text className="text-xl font-medium text-tGray-700">New Project</Text>
      <Input purpose="projectName" control={control} register={register} />
      <div className="flex gap-4">
        <Input purpose="currency" control={control} register={register} />
        <Input purpose="hourlyRate" control={control} register={register} />
      </div>

      <Button purpose="blue" onClick={handleSubmit(onSubmit)}>
        Create Project
      </Button>
    </div>
  );
};

export default NewProject;
