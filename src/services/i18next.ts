// import 'intl-pluralrules';
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import {I18nManager} from 'react-native';
// import * as RNLocalize from 'react-native-localize';
// import en from '../locales/en.json';
// import ar from '../locales/ar.json';

// export const initializeI18n = (setLanguage: (lang: string) => void) => {
//   i18n.use(initReactI18next).init({
//     resources: {
//       en: {translation: en},
//       ar: {translation: ar},
//     },
//     lng: 'en',
//     fallbackLng: 'en',
//     interpolation: {escapeValue: false},
//   });

//   const locale = RNLocalize.getLocales()[0].languageCode;
//   i18n.changeLanguage(locale);
//   setLanguage(locale);
//   i18n.changeLanguage(locale);
//   I18nManager.forceRTL(locale === 'ar');
// };


import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

export const languageResources = {
  en: {translation: en},
  ar: {translation: ar},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;