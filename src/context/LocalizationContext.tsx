import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import * as RNLocalize from 'react-native-localize';
import i18next from '../services/i18next';
import {I18nManager} from 'react-native';

interface LocalizationContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18next.changeLanguage(locale);
    setLanguage(locale);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
    if (lang === 'ar') {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  };

  return (
    <LocalizationContext.Provider value={{language, changeLanguage}}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const uselanguageContext = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within an ImageProvider');
  }
  return context;
};
