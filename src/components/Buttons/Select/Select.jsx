import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Icon from "../../Icon.jsx";

const Select = ({
  options,
  multiple,
  placeholder,
  onChange,
  defaultValue,
  disabled,
}) => {
  const [selected, setSelected] = useState(defaultValue ?? null);

  const handleSelect = (value) => {
    if (selected === value) {
      setSelected(null);
    } else {
      setSelected(value);
    }
  };

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <div className=" relative min-h-[38px] w-full z-10">
      <div className="absolute inset-0">
        <Listbox
          value={selected}
          onChange={handleSelect}
          multiple={multiple}
          disabled={disabled}
        >
          {({ open }) => (
            <div
              className={clsx(
                "relative rounded-lg bg-white py-1.5 px-3 text-left  border border-border",
                {
                  "shadow-card": open,
                }
              )}
            >
              <Listbox.Button className="relative w-full h-full ">
                {({ open }) => (
                  <>
                    <span className="block text-left truncate text-tGray-600 px-2">
                      {selected?.value?.length > 0
                        ? selected.value
                        : placeholder}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                      <Icon
                        purpose={clsx({
                          up: open,
                          down: !open,
                        })}
                      />
                    </span>
                  </>
                )}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="max-h-60 w-full overflow-auto  bg-white py-1 text-base  sm:text-sm">
                  {options?.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active, selected }) =>
                        clsx("relative cursor-default select-none py-2 px-2", {
                          "bg-tGray-100 text-tGray-700": active || selected,
                          "text-tGray-500": !active,
                        })
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.value}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default Select;
