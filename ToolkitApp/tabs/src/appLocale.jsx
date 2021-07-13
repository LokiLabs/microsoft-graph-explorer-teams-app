// import location from "react-dom";

const localeMap = {
    'de-de': 'de-DE',
    'en-us': 'en-US',
    'es-es': 'es-ES',
    'fr-fr': 'fr-FR',
    'ja-jp': 'ja-JP',
    'pt-br': 'pt-BR',
    'ru-ru': 'ru-RU',
    'zh-cn': 'zh-CN'
  };
  
  function getTryItLocale() {
    return new URLSearchParams(window.location.search).get('locale');
  }
  
  function getPortalLocale() {
    return window.location.pathname.split('/')[1].toLocaleLowerCase();
  }
  
  const hostDocumentLocale = getTryItLocale() || getPortalLocale();
  
  // eslint-disable-next-line
  export const rscLocale = hostDocumentLocale && localeMap[hostDocumentLocale] || 'en-US';
  