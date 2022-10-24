import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <div className="">{t("Lets start tracking")}</div>;
};

export default Home;
