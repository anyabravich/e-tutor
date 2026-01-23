import { translations, defaultLocale, locales, getNestedValue } from './index'
import type { Locale } from './types'

/**
 * Client-side i18n manager
 */
class I18nClient {
  private currentLocale: Locale = defaultLocale

  constructor() {
    this.init()
  }

  private init(): void {
    // Get stored locale or default
    const stored = localStorage.getItem('locale') as Locale | null
    this.currentLocale = stored && locales.includes(stored) ? stored : defaultLocale

    // Set html lang attribute
    document.documentElement.lang = this.currentLocale

    // Listen for language change events
    document.addEventListener('langchange', (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: string }>
      const newLocale = customEvent.detail.lang as Locale
      if (locales.includes(newLocale)) {
        this.setLocale(newLocale)
      }
    })

    // Initial translation
    this.translatePage()
  }

  /**
   * Get translation for a key
   */
  t(key: string): string {
    const translation = getNestedValue(translations[this.currentLocale], key)
    return typeof translation === 'string' ? translation : key
  }

  /**
   * Get current locale
   */
  getLocale(): Locale {
    return this.currentLocale
  }

  /**
   * Set new locale and update page
   */
  setLocale(locale: Locale): void {
    if (!locales.includes(locale)) return

    this.currentLocale = locale
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale

    this.translatePage()
  }

  /**
   * Translate all elements with data-i18n attribute
   */
  translatePage(): void {
    // Translate text content
    const elements = document.querySelectorAll<HTMLElement>('[data-i18n]')
    elements.forEach((el) => {
      const key = el.dataset.i18n
      if (key) {
        const translation = this.t(key)
        el.textContent = translation
      }
    })

    // Translate HTML content (for elements with nested tags)
    const htmlElements = document.querySelectorAll<HTMLElement>('[data-i18n-html]')
    htmlElements.forEach((el) => {
      const key = el.dataset.i18nHtml
      if (key) {
        const translation = this.t(key)
        el.innerHTML = translation
      }
    })

    // Translate placeholders
    const placeholderElements = document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]')
    placeholderElements.forEach((el) => {
      const key = el.dataset.i18nPlaceholder
      if (key) {
        el.placeholder = this.t(key)
      }
    })

    // Translate aria-labels
    const ariaElements = document.querySelectorAll<HTMLElement>('[data-i18n-aria]')
    ariaElements.forEach((el) => {
      const key = el.dataset.i18nAria
      if (key) {
        el.setAttribute('aria-label', this.t(key))
      }
    })

    // Translate alt text
    const altElements = document.querySelectorAll<HTMLImageElement>('[data-i18n-alt]')
    altElements.forEach((el) => {
      const key = el.dataset.i18nAlt
      if (key) {
        el.alt = this.t(key)
      }
    })

    // Mark page as translated to prevent content flash
    document.documentElement.classList.add('_i18n-ready')
  }
}

// Initialize on DOM ready
let i18nInstance: I18nClient | null = null

export function initI18n(): I18nClient {
  if (!i18nInstance) {
    i18nInstance = new I18nClient()
  }
  return i18nInstance
}

export function getI18n(): I18nClient | null {
  return i18nInstance
}

// Auto-init if DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initI18n())
  } else {
    initI18n()
  }
}
