import { useState } from "react";
import { useTranslation } from "react-i18next";

const Checkbox = ({ label, initialState, onChange, isChecked, table }) => {
  const [checked, setChecked] = useState(initialState ?? false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    onChange();
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={table ? isChecked : checked}
        onChange={handleCheckboxChange}
        className="w-4 h-4  border border-t500 rounded
        text-primary
        cursor-pointer
        appearance-none
        checked:accent-primary
        checked:bg-primary
        bg-white
        transform transition duration-300 ease-in-out hover:scale-110
        focus:outline-none focus:ring-transparent checked:hover:bg-primary"
      />
      {label && (
        <label className="text-sm font-medium text-tGray-500">{t(label)}</label>
      )}
    </div>
  );
};

export default Checkbox;
