"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import jaCommon from "../locales/ja/common.json";
import krCommon from "../locales/kr/common.json";
import cnCommon from "../locales/cn/common.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ja", "kr", "cn"],
  resources: {
    en: {
      common: enCommon,
    },
    ja: {
      common: jaCommon,
    },
    kr: {
      common: krCommon,
    },
    cn: {
      common: cnCommon,
    },
  },
  ns: ["common"],
  defaultNS: "common",
});

export default i18n;
