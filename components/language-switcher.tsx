"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸"
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिंदी",
    flag: "🇮🇳"
  },
  {
    code: "te",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳"
  },
  {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
    flag: "🇮🇳"
  },
  {
    code: "kn",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    flag: "🇮🇳"
  }
]

export function LanguageSwitcher() {
  const { locale, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:bg-white/20 transition-all duration-300 px-3 py-2 rounded-lg border border-white/20 hover:border-white/40"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:block font-medium text-sm">{currentLanguage.nativeName}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="fixed sm:absolute top-16 right-4 sm:top-full sm:right-0 mt-2 w-64 sm:w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] animate-in slide-in-from-top-2 duration-200">
          <div className="p-2">
            <div className="flex items-center gap-3 px-3 py-2 text-gray-500 border-b border-gray-100">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Select Language</span>
            </div>
            
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center gap-3 px-3 py-4 text-left hover:bg-brand-light transition-colors duration-200 rounded-lg group touch-manipulation ${
                    locale === language.code ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-700'
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{language.nativeName}</div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-600">
                      {language.name}
                    </div>
                  </div>
                  {locale === language.code && (
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
