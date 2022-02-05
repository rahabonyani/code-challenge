import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    return <div>{t("persian:HOME_PAGE")}</div>;
};

export default HomePage;
