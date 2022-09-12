import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import moment from 'moment';

import { ENGLISH } from './en/translation';
import { FRENCH } from './fr/translation';
import { JAPANESE } from './jp/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: ENGLISH,
      },
      fr: {
        translation: FRENCH,
      },
      jp: {
        translation: JAPANESE,
      },
    },
    interpolation: {
      format: (value, format, lang)  => {
        if (value instanceof Date) {
          return moment(value).format(format);
        }

        return value;
      },
    },
  })