import { useNavigate } from "react-router-dom";
import { Input, Text, Button, Icon } from "../../components/index.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const ReferenceCode = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { isValid },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
      })
    ),
  });

  const resentCode = () => {
    navigate("/");
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-4 rounded-xl shadow-card bg-white max-w-form w-full p-10">
        <Icon purpose="reference-code" />
        <Text className="form-small-title capitalize mb-2">Reference code</Text>

        <Text className="text-tGray-500 -mt-4 mb-2 text-lg font-medium">
          Check your email enter the code
        </Text>

        <div className="flex flex-row gap-2 max-w-[328px]">
          <Input purpose={"code1"} control={control} register={register} />
          <Input purpose={"code2"} control={control} register={register} />
          <Input purpose={"code3"} control={control} register={register} />
          <Input purpose={"code4"} control={control} register={register} />
          <Input purpose={"code5"} control={control} register={register} />
          <Input purpose={"code6"} control={control} register={register} />
        </div>

        <Button purpose="blue" disabled={!isValid}>
          Create free account
        </Button>

        <div className="flex items-center justify-center gap-1">
          <Text
            className="text-primary font-semibold text-base animate-bigger cursor-pointer"
            onClick={resentCode}
          >
            Resent code
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCode;
