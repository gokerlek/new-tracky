import Select from "./Buttons/Select/Select.jsx";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const options = [
  { value: "Wade Cooper" },
  { value: "Arlene Mccoy" },
  { value: "Devon Webb" },
  { value: "Tom Cook" },
  { value: "Tanya Fox" },
  { value: "Hellen Schmidt" },
];

const timesOptions = [
  { value: "Todays" },
  { value: "Yesterday" },
  { value: "This week" },
  { value: "This month" },
  { value: "This year" },
  { value: "Last week" },
  { value: "Last month" },
  { value: "Last year" },
];

const FilterProjects = ({ onChange }) => {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);

  const handleSelectProject = (e) => {
    setSelectedProject(e);
  };

  const handleSelectTime = (e) => {
    setSelectedDates(e);
  };

  useEffect(() => {
    if (onChange) {
      onChange({
        project: selectedProject,
        dates: selectedDates,
      });
    }
  }, [selectedProject, selectedDates]);

  return (
    <div className="w-[400px] flex gap-4">
      <Select
        options={options}
        placeholder={t("All project")}
        onChange={handleSelectProject}
      />
      <Select
        options={timesOptions}
        placeholder={t("All times")}
        onChange={handleSelectTime}
      />
    </div>
  );
};

export default FilterProjects;
