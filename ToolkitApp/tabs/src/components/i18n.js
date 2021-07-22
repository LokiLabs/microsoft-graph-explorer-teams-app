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
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['querystring', 'path', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
  
      // cache user language
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
    },
    fallbackLng: 'en-US',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    supportedLngs: [
      'en-US',
      'de-DE',
      'es-ES',
      'fr-FR',
      'ja-JP',
      'pt-BR',
      'ru-RU',
      'zh-CN',
    ],
    resources: {
      'en-US': enUS,
      'de-DE': deDE,
      'es-ES': esES,
      'fr-FR': frFR,
      'ja-JP': jaJP,
      'pt-BR': ptBR,
      'ru-RU': ruRU,
      'zh-CN': zhCN,
    },
  });


export default i18n;