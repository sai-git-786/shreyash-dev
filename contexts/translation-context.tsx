'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface TranslationContextType {
  locale: string
  translations: any
  t: (key: string) => string
  changeLanguage: (newLocale: string) => void
  isLoading: boolean
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('en')
  const [translations, setTranslations] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Check if there's a saved language preference
    try {
      if (typeof window !== 'undefined') {
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale && ['en', 'te', 'hi', 'ta', 'kn'].includes(savedLocale)) {
          setLocale(savedLocale)
        }
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [])

  useEffect(() => {
    // Load translations from JSON files
    const loadTranslations = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/locales/${locale}/common.json`)
        if (response.ok) {
          const data = await response.json()
          setTranslations(data)
        } else {
          console.error('Failed to load translations for locale:', locale)
        }
      } catch (error) {
        console.error('Error loading translations:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [locale])
  
  const t = (key: string) => {
    try {
      const keys = key.split('.')
      let value: any = translations
      
      for (const k of keys) {
        value = value?.[k]
      }
      
      return value || key
    } catch (error) {
      console.error('Translation error:', error, 'Key:', key, 'Locale:', locale)
      return key
    }
  }
  
  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale)
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', newLocale)
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  return (
    <TranslationContext.Provider value={{ locale, translations, t, changeLanguage, isLoading }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
