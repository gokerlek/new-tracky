import React, { useEffect, useState } from "react";
import Type1 from "./Options/Type1";
import Type2 from "./Options/Type2";
import Type3 from "./Options/Type3";
import clsx from "clsx";
import useComponentVisible from "../../../hooks/ClickOutside.jsx";

const NewSelect = ({
  isMulti,
  options,
  type = 1,
  placeholder,
  label,
  disabled = false,
  onChange,
  selected,
  setSelected,
  outside,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const menuOpenClose = () => {
    if (disabled) return;
    setIsComponentVisible(!isComponentVisible);
  };

  const closeMenu = () => {
    setIsComponentVisible(false);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const selectedOption = outside ? selected : selectedOptions;

  const setSelectedOption = outside ? setSelected : setSelectedOptions;

  useEffect(() => {
    if (type === 2) {
      const newSelectedOptions = selectedOption.filter((item) =>
        options.find((option) => option.id === item.parent)
      );
      setSelectedOption(newSelectedOptions);
    }
  }, [options, selectedOption]);

  useEffect(() => {
    if (type === 3) {
      let newSelectedOptions = [];

      selectedOption.map((item) => {
        options.map((o) =>
          o.options.map((oo) => {
            if (oo.id === item.parent) {
              newSelectedOptions = [...newSelectedOptions, item];
            }
          })
        );
      });

      setSelectedOption(newSelectedOptions);
    }
  }, [options, selectedOption]);

  useEffect(() => {
    onChange(selectedOption, options, type);
  }, [selectedOption]);

  const handleSingleSelect = (option) => {
    if (selectedOption.id === option.id) {
      setSelectedOption([]);
    } else {
      setSelectedOption([option]);
    }
    setIsComponentVisible(false);
  };

  const handleMultiSelect = (option) => {
    if (selectedOption.some((item) => item.id === option.id)) {
      setSelectedOption(selectedOption.filter((item) => item.id !== option.id));
    } else {
      setSelectedOption([...selectedOption, option]);
    }
  };

  const controlledOnClick = (option) => () => {
    isMulti ? handleMultiSelect(option) : handleSingleSelect(option);
  };

  const Options = ({ type, data }) => {
    switch (type) {
      case 1:
        return (
          <Type1
            data={data}
            selectedOption={selectedOption}
            controlledOnClick={controlledOnClick}
          />
        );

      case 2:
        return (
          <Type2
            data2={data}
            selectedOption={selectedOption}
            controlledOnClick={controlledOnClick}
          />
        );

      case 3:
        return (
          <Type3
            data3={data}
            selectedOption={selectedOption}
            controlledOnClick={controlledOnClick}
          />
        );
    }
  };

  return (
    <div className="relative h-[40px] w-[200px]">
      {label && (
        <div
          className={clsx("block text-sm leading-5 font-medium ", {
            "text-gray-400": disabled,
            "text-mGray850": !disabled,
          })}
        >
          {label}
        </div>
      )}

      <div
        ref={ref}
        onBlur={closeMenu}
        className={clsx(
          "absolute flex flex-col items-center justify-center  bg-white rounded w-[200px] min-h-[40px]",
          {
            shadow: isComponentVisible,
            "border border-card": !isComponentVisible,
            "cursor-not-allowed": disabled,
            "cursor-pointer hover:shadow-md": !disabled,
          }
        )}
      >
        <div
          onClick={menuOpenClose}
          className={clsx(
            "flex flex-row items-center justify-between w-full px-[12px] py-[8px]",
            {
              "text-gray-400": selectedOption.length === 0,
            }
          )}
        >
          {selectedOption.length === 1
            ? selectedOption[0].value
            : selectedOption.length > 1
            ? `${selectedOption[0].value} +${selectedOption.length - 1} `
            : placeholder}

          {/*<Icon purpose={clsx("arrow", isComponentVisible ? "up" : "down", "sidebar")} />*/}
        </div>

        {isComponentVisible && !disabled && (
          <div className="flex flex-col items-center justify-start w-full h-fit max-h-[400px] overflow-y-scroll ">
            <Options type={type} data={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewSelect;
