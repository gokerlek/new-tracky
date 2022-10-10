import { useState } from "react";
import { useTranslation } from "react-i18next";

const Checkbox = ({ label, initialState }) => {
  const [checked, setChecked] = useState(initialState ?? false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="w-4 h-4  border border-t500 rounded
        cursor-pointer
        appearance-none
        checked:accent-primary
        checked:bg-primary
        bg-white
        transform transition duration-300 ease-in-out hover:scale-110
        text-primary
        focus:outline-none focus:ring-transparent checked:hover:bg-primary"
      />
      <label className="text-sm font-medium text-gray-700">{t(label)}</label>
    </div>
  );
};

export default Checkbox;
