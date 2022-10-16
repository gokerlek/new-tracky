import { useTranslation } from "react-i18next";
import { Text, Icon } from "../index.js";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  purpose = "orange",
  className,
  disabled,
}) => {
  const { t } = useTranslation();
  const leftIconElement = {
    purpose: typeof leftIcon === "object" ? leftIcon.purpose : leftIcon,
    width: leftIcon?.width ?? null,
    height: leftIcon?.height ?? null,
    color: leftIcon?.color ?? null,
    className: leftIcon?.className ?? null,
  };

  const rightIconElement = {
    purpose: typeof rightIcon === "object" ? rightIcon.purpose : rightIcon,
    width: rightIcon?.width,
    height: rightIcon?.height,
    color: rightIcon?.color,
  };

  const disabledClassName = {
    " cursor-not-allowed hover:scale-100": disabled,
  };

  const containerClassName = {
    blue: clsx(
      " flex items-center justify-center bg-primary hover:bg-primarySoft rounded-lg px-8",
      "h-12 text-white font-medium cursor-pointer text-center",
      "animate-bigger w-full",
      disabledClassName
    ),

    google: clsx(
      "flex items-center justify-center bg-white rounded-lg px-8 border-card border",
      "h-12 text-primary font-medium cursor-pointer text-center",
      "animate-bigger w-full",
      disabledClassName
    ),

    archive: clsx(
      "flex items-center justify-center  rounded gap-1 px-2 py-1.5 ",
      "  text-xs  cursor-pointer text-center",
      "animate-bigger",
      disabledClassName,
      {
        "bg-tGray-200 text-tGray-800 font-light": disabled,
        "bg-tPurple-100 text-tGray-700 font-light": !disabled,
      }
    ),

    "add-new-project": clsx(
      "flex items-center justify-end bg-tPurple-300 rounded-lg pr-6 gap-2",
      "h-10 text-tGray-700 font-medium cursor-pointer",
      "animate-bigger w-full",
      disabledClassName
    ),
  };

  return (
    <div
      className={className ?? containerClassName[purpose]}
      onClick={disabled ? null : onClick}
    >
      {leftIconElement.purpose && <Icon {...leftIconElement} />}

      <Text>{t(children)}</Text>

      {rightIconElement.purpose && <Icon {...rightIconElement} />}
    </div>
  );
};

export default Button;
