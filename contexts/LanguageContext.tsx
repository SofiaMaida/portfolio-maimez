'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to safely access localStorage
const getStoredLanguage = (): Language | null => {
  if (typeof window === 'undefined') return null;
  try {
    return (localStorage.getItem('language') as Language) || null;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return null;
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  // Set the initial language state on mount
  useEffect(() => {
    setIsMounted(true);
    
    const storedLanguage = getStoredLanguage();
    if (storedLanguage) {
      setLanguageState(storedLanguage);
    } else if (typeof window !== 'undefined') {
      // Only access navigator on client side
      const browserLang = navigator.language.split('-')[0];
      const defaultLang: Language = browserLang === 'es' ? 'es' : 'en';
      setLanguageState(defaultLang);
      // Save default language to localStorage
      try {
        localStorage.setItem('language', defaultLang);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  }, []);

  // Update language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  // Only render the provider with the actual language state after mounting
  // This prevents hydration mismatches
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
