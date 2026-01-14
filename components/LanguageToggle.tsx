'use client';

import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}
