
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SUPPORTED_LANGUAGES, LANGUAGE_FLAGS } from '@/contexts/language/languageConfig';
import type { Language } from '@/types/language';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 outline-none">
        <img 
          src={`https://flagcdn.com/w20/${LANGUAGE_FLAGS[language]}.png`} 
          alt={`${language} Flag`}
          className="w-5 h-4"
        />
        <span className="text-white font-medium text-sm uppercase">{language}</span>
        <ChevronDown className="h-4 w-4 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden mt-2 min-w-[120px] z-50">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem 
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-all duration-300 ${
              language === lang ? 'bg-accent/10 text-accent font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
            }`}
          >
            <img 
              src={`https://flagcdn.com/w20/${LANGUAGE_FLAGS[lang]}.png`} 
              alt={`${lang} Flag`} 
              className="w-5 h-4" 
            />
            <span>{lang.toUpperCase()}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
