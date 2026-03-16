import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="gap-2 bg-white shadow-md"
    >
      <Globe className="w-4 h-4" />
      {language === 'en' ? 'हिंदी' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
