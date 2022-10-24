import { useForm } from "react-hook-form";
import { Button, Input, Text } from "../index.js";

const ExportPdf = ({ setIsOpen, setSuccess }) => {
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
      <Text className="text-xl font-medium text-tGray-700">Export as PDF</Text>

      <div className="flex gap-4">
        <Input purpose="startDate" control={control} register={register} />
        <Input purpose="end" control={control} register={register} />
      </div>

      <Button purpose="blue" onClick={handleSubmit(onSubmit)}>
        Export
      </Button>

      <Text
        onClick={() => setIsOpen(false)}
        className="text-base font-medium text-tGray-700 text-center cursor-pointer"
      >
        Clear
      </Text>
    </div>
  );
};

export default ExportPdf;
