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
  const [language, setLanguageState] = useState<Language>('es');

  // Initialize language on client - always Spanish
  useEffect(() => {
    setLanguageState('es');
    document.documentElement.lang = 'es';
    try {
      localStorage.setItem('language', 'es');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, []);

  // Update language and save to localStorage (kept for compatibility but always sets to 'es')
  const setLanguage = (lang: Language) => {
    setLanguageState('es');
    try {
      localStorage.setItem('language', 'es');
      document.documentElement.lang = 'es';
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

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
