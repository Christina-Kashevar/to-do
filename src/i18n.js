import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    keySeparator: false,

    backend: {
      loadPath: `/locales/{{lng}}.json`,
      allowMultiLoading: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;