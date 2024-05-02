import { useTranslation } from "react-i18next";

export const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className="center">
      <div className="ring"></div>
      <span className="loading-span">{t("Loading")}</span>
    </div>
  );
};
