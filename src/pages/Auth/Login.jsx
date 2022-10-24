import { useNavigate } from "react-router-dom";
import { Input, Text, Button, Checkbox, Icon } from "../../components/index.js";
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
      <div className="relative min-w-form min-h-[540px]">
        <div className=" absolute flex flex-col items-center justify-start rounded-xl shadow-card bg-white min-w-form w-full p-10 z-10">
          <Text className="text-3xl text-primary font-medium">
            Lets start tracking
          </Text>

          <Text className="text-tGray-500 mb-6 text-lg font-medium">
            Login to your account
          </Text>

          <div className="flex flex-col gap-4 w-full">
            <Input purpose={"email"} control={control} register={register} />
            <Input purpose={"password"} control={control} register={register} />
          </div>

          <div className="w-full flex justify-between items-center mt-4 mb-6 ">
            <Checkbox label="Stay logged in" />
            <Text
              className="text-primary font-medium text-sm animate-bigger cursor-pointer"
              onClick={routeToForgotPassword}
            >
              Forgot password
            </Text>
          </div>

          <Button purpose="blue" disabled={!isValid}>
            Log in
          </Button>

          <div className="flex flex-row w-full items-center h-[20px] my-4 ">
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

          <div className="flex items-center justify-center gap-1 mt-8">
            <Text className="text-sm text-tGray-500">Dont have an account</Text>
            <Text
              className="text-primary font-medium text-sm animate-bigger cursor-pointer"
              onClick={routeToSignUp}
            >
              Sign up
            </Text>
          </div>

          <Icon purpose="start-stop" className="absolute top-[-110px]" />
        </div>
        <Icon purpose="green-shape-1" className="absolute -top-8 -left-12 " />
        <Icon
          purpose="green-shape-2"
          className="absolute -bottom-4 -right-8 "
        />
        <Icon purpose="orange-shape" className="absolute -bottom-3 -left-7 " />
        <Icon
          purpose="paper-2"
          className="absolute -bottom-4 -right-[353px] "
        />
        <Icon
          purpose="paper-1"
          className="absolute bottom-1/4 -left-[303px] "
        />
      </div>
    </div>
  );
};

export default Login;
