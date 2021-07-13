import { rscLocale } from '../../appLocale';
import messages from '../../messages';

export function translateMessage(messageId) {
  const translatedMessage = getTranslation(messageId, rscLocale);
  if (translatedMessage) {
    return translatedMessage;
  }
  return getTranslation(messageId, 'en-US') || messageId;
}

function getTranslation(messageId, locale) {
  const localeMessages = (messages)[locale];
  if (localeMessages) {
    const key = Object.keys(localeMessages).find(k => k === messageId);
    const message = (localeMessages)[key];
    if (message) {
      return message.toString();
    }
  }
  return null;
}