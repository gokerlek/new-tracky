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
    "opacity-50 cursor-not-allowed hover:scale-100": disabled,
  };

  const containerClassName = {
    purple: clsx(
      " flex items-center justify-center bg-primary hover:bg-primarySoft rounded px-8",
      "h-12 text-white font-medium cursor-pointer text-center",
      "animate-bigger w-full",
      disabledClassName
    ),

    google: clsx(
      "flex items-center justify-center bg-white rounded px-8 border-card border",
      "h-12 text-gray-500 font-medium cursor-pointer text-center",
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
