import { useNavigate } from "react-router-dom";
import { Input, Text, Button, Checkbox } from "../../components/index.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Login = () => {
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
        password: yup.string().min(3).required(),
      })
    ),
  });

  const routeToSignUp = () => {
    navigate("/signup");
  };

  const routeToForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="h-fit w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-2 rounded-xl shadow-card bg-white max-w-form w-full p-10">
        <Text className="text-3xl font-semibold">Lets start tracking</Text>

        <Text className="text-gray-500 mb-4">Login to your account</Text>

        <div className="flex flex-col gap-4 w-full">
          <Input purpose={"email"} control={control} register={register} />
          <Input purpose={"password"} control={control} register={register} />
        </div>

        <div className="w-full flex justify-between items-center mb-4 mt-1">
          <Checkbox label="Stay logged in" />
          <Text
            className="text-primary font-medium text-sm animate-bigger cursor-pointer"
            onClick={routeToForgotPassword}
          >
            Forgot password
          </Text>
        </div>

        <Button purpose="purple" disabled={!isValid}>
          Log in
        </Button>

        <div className="flex flex-row w-full items-center h-[20px] my-2 ">
          <div className="h-[1px] flex-1 bg-graySoft -ml-10"></div>

          <Text className="text-base text-[#6B7280] px-4 pb-1">or</Text>

          <div className="h-[1px] flex-1 bg-graySoft -mr-10"></div>
        </div>

        <Button
          purpose="google"
          onClick={console.log("google")}
          leftIcon={{ purpose: "google", className: "absolute left-4" }}
        >
          Continue with Google
        </Button>

        <div className="flex items-center justify-center gap-1 mt-4">
          <Text className="text-sm">Dont have an account</Text>
          <Text
            className="text-primary font-medium text-sm animate-bigger cursor-pointer"
            onClick={routeToSignUp}
          >
            Sign up
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
