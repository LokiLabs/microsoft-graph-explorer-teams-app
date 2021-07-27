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

import "@microsoft/teams-js";

const fallbackLang = 'en';

const supportedLangs = [
  'en',
  'de',
  'es',
  'fr',
  'ja',
  'pt',
  'ru',
  'zh',
  'en-US',
  'de-DE',
  'es-ES',
  'fr-FR',
  'ja-JP',
  'pt-BR',
  'ru-RU',
  'zh-CN', 
];

// We need to abstract the language changing because we want to:
// 1. Process the locale code
// 2. Make sure that we do not trigger an update if the language is already set to the processed code
export const changeLanguage = (i18n, code) => {
  let locale = processLanguageCode(code);
  if (i18n.languages) {
    if (i18n.languages[0] === locale) {
      return;
    }
  }
  i18n.changeLanguage(locale);
};

const processLanguageCode = (code) => {
  if (!code) {
    return fallbackLang;
  }
  let langCode = code.replace('_', '-').toLowerCase();
  // Check general supported locales
  let supported = supportedLangs.find(l => l.toLowerCase() === langCode);
  if (supported) {
    return supported;
  }
  // Remove country part of locale to check for general language support
  if (langCode.includes("-")) {
    langCode = langCode.split("-")[0];
  }
  supported = supportedLangs.find(l => l.toLowerCase().startsWith(langCode));
  if (supported) {
    return supported;
  }
  return fallbackLang;
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        'querystring', 
        'path', 
        'cookie', 
        'localStorage', 
        'sessionStorage', 
        'navigator', 
        'htmlTag'
      ],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
  
      // cache user language
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
    },
    fallbackLng: fallbackLang,
    debug: true,
    supportedLngs: supportedLangs,
    resources: {
      'en': enUS,
      'de': deDE,
      'es': esES,
      'fr': frFR,
      'ja': jaJP,
      'pt': ptBR,
      'ru': ruRU,
      'zh': zhCN,
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