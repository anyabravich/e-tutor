import { en } from './translations/en'
import { ru } from './translations/ru'
import type { Locale, Translations } from './types'

export const translations: Record<Locale, Translations> = {
  en,
  ru
}

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'ru']

/**
 * Get a nested value from an object using dot notation
 */
export function getNestedValue(obj: object, path: string): string {
  return path.split('.').reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return path // Return the key if not found
  }, obj) as string
}

/**
 * Get translation for a key in a specific locale
 */
export function t(key: string, locale: Locale = defaultLocale): string {
  const translation = getNestedValue(translations[locale], key)
  return typeof translation === 'string' ? translation : key
}

/**
 * Get the current locale from localStorage or default
 */
export function getCurrentLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const stored = localStorage.getItem('locale') as Locale | null
  return stored && locales.includes(stored) ? stored : defaultLocale
}

/**
 * Set the current locale in localStorage
 */
export function setCurrentLocale(locale: Locale): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export { en, ru }
export type { Locale, Translations } from './types'
