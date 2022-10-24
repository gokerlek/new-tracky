import { useNavigate } from "react-router-dom";
import { Input, Text, Button, Icon } from "../../components/index.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const CreatePassword = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        kode: yup.string().required(),
        newPassword: yup.string().min(3).required(),
      })
    ),
  });

  const routeToLogin = () => {
    navigate("/");
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-4 rounded-xl shadow-card bg-white max-w-form w-full p-10">
        <Icon purpose="forgot-password" />
        <Text className="form-small-title capitalize">Create password</Text>

        <Text className="text-tGray-500 -mt-4 mb-2 text-lg font-medium">
          Check your email enter the code
        </Text>

        <Input purpose={"kode"} control={control} register={register} />
        <Input purpose={"newPassword"} control={control} register={register} />

        <Button purpose="blue" disabled={!isValid}>
          Reset password
        </Button>
      </div>
    </div>
  );
};

export default CreatePassword;
