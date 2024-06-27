/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ru, aze, kaz, esp } from './locales';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: en.common,
    components: en.components,
    pages: en.pages,
  },
  ru: {
    common: ru.common,
    components: ru.components,
    pages: ru.pages,
  },
  aze: {
    common: aze.common,
    components: aze.components,
    pages: aze.pages,
  },
  kaz: {
    common: kaz.common,
    components: kaz.components,
    pages: kaz.pages,
  },
  esp: {
    common: esp.common,
    components: esp.components,
    pages: esp.pages,
  },
} as const;

const options = {
  lng: localStorage.getItem('DemoProject') ?? 'en',
  interpolation: {
    escapeValue: false, // not needed for react
  },
  resources,
  fallbackLng: 'en',
  ns: ['common', 'components', 'pages', 'shared'],
  defaultNS,
  initImmediate: false,
  fallbackNS: 'shared',
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next) // passes i18n down to react-i18next
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(options);

export default i18n;
