import { useNavigate } from "react-router-dom";
import { Input, Text, Button, Checkbox, Icon } from "../../components/index.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SignUp = () => {
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
      <div className="flex flex-col items-center justify-start gap-4 rounded-xl  max-w-form w-full p-10">
        <Icon purpose="sign-up-dog" />
        <Text className="form-small-title capitalize mb-2">
          Forgot password
        </Text>

        <Input purpose={"email"} control={control} register={register} />
        <Input
          purpose={"choosePassword"}
          control={control}
          register={register}
        />
        <div className="inline-flex">
          <Checkbox label="I agree to the" />
          <Text
            className="text-primary font-medium text-sm animate-bigger cursor-pointer ml-1"
            onClick={() => console.log("open modal")}
          >
            Terms of Use
          </Text>
        </div>

        <Button purpose="blue" disabled={!isValid}>
          Create free account
        </Button>

        <div className="flex items-center justify-center gap-1">
          <Text
            className="text-primary font-semibold text-base animate-bigger cursor-pointer"
            onClick={routeToLogin}
          >
            Login
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
