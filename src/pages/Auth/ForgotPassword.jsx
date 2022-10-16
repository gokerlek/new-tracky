import { useNavigate } from "react-router-dom";
import { Input, Text, Button, Icon } from "../../components/index.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const ForgotPassword = () => {
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

  const routeToLogin = () => {
    navigate("/");
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-4 rounded-xl shadow-card bg-white max-w-form w-full p-10">
        <Icon purpose="forgot-password" />
        <Text className="form-small-title capitalize mb-2">
          Forgot password
        </Text>

        <Input purpose={"email"} control={control} register={register} />

        <Button purpose="blue" disabled={!isValid}>
          Reset password
        </Button>

        <div className="flex items-center justify-center gap-1">
          <Text
            className="text-primary text-sm animate-bigger cursor-pointer"
            onClick={routeToLogin}
          >
            Login
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
