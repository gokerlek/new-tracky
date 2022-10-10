import { useTranslation } from "react-i18next";

const Text = ({ children, noTranslate, markdown, className, onClick }) => {
  const { t } = useTranslation();

  const text = noTranslate ? children : t(children);

  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
};

export default Text;
