'use client'

import { useState, useEffect } from 'react'

export function useTranslation() {
  const [locale, setLocale] = useState('en')
  const [translations, setTranslations] = useState<any>({})
  
  useEffect(() => {
    // Check if there's a saved language preference
    try {
      if (typeof window !== 'undefined') {
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'te')) {
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
  
  return { t, changeLanguage, locale }
}
