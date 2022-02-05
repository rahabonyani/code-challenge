import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import persian from "./language/persian.json";

export const resources = {
    fa: { persian },
} as const;

i18n.use(initReactI18next).init({
    lng: "fa",
    ns: ["persian"],
    resources,
    defaultNS: "persian",
});

export default i18n;
