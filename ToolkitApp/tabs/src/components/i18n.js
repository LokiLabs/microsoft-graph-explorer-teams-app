import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUS from '../translations/en-US.json';
import deDE from '../translations/de-DE.json';
import esES from '../translations/es-ES.json';
import frFR from '../translations/fr-FR.json';
import jaJP from '../translations/ja-JP.json';
import ptBR from '../translations/pt-BR.json';
import ruRU from '../translations/ru-RU.json';
import zhCN from '../translations/zh-CN.json';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en_us',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en_us: enUS,
        de_de: deDE,
        es_es: esES,
        fr_fr: frFR,
        ja_jp: jaJP,
        pt_br: ptBR,
        ru_ru: ruRU,
        zh_cn: zhCN,
    },
  });


export default i18n;