import useInputValue from "../../hooks/useInputValue.js";
import { useController } from "react-hook-form";
import clsx from "clsx";
import { Icon, Text } from "../index.js";
import { useTranslation } from "react-i18next";

const Input = ({ purpose, control, register, disabled, darkLabel }) => {
  const { t } = useTranslation();

  const { name, label, placeholder, leftIcon, rightIcon, type } = useInputValue(
    purpose,
    t
  );

  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    control,
    name: name,
  });

  return (
    <div className="flex flex-col w-full">
      <Text
        className={clsx("text-sm font-medium  mb-1", {
          "text-tGray-700": darkLabel,
          "text-tGray-600": !darkLabel,
        })}
      >
        {label}
      </Text>

      <label className="relative flex w-full ">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon purpose={leftIcon} />
          </span>
        )}

        <input
          type={type}
          onChange={onChange}
          className={clsx(
            " appearance-none bg-t100  border  rounded-md py-2  shadow-sm ",
            " placeholder:text-t700 animate-shadow ",
            "focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
            {
              "pl-9": leftIcon,
              "pr-9": rightIcon,
              "pr-3": !rightIcon,
              "pl-3": !leftIcon,
              "border-t500": !error,
              "border-error": error,
              "w-12 h-12 flex items-center justify-center text-center":
                purpose.includes("code"),
              "w-full block": !purpose.includes("code"),
            }
          )}
          placeholder={t(placeholder)}
          disabled={disabled}
          {...register(name)}
        />

        {rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon purpose={rightIcon} />
          </span>
        )}
      </label>
      {error && <span className="text-error text-xs  ">{error?.message}</span>}
    </div>
  );
};

export default Input;
