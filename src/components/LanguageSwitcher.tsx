import { useLanguage } from '@/hooks/useLanguage';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative p-2 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <span 
          className={`absolute text-xs font-bold transition-all duration-300 transform ${
            language === 'id' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4'
          }`}
        >
          ID
        </span>
        <span 
          className={`absolute text-xs font-bold transition-all duration-300 transform ${
            language === 'en' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          EN
        </span>
      </div>
      
      {/* Hover tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {language === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
