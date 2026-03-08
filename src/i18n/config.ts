export const locales = ['et', 'en', 'fi'] as const;
export const defaultLocale = 'et' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  et: 'Eesti',
  en: 'English',
  fi: 'Suomi',
};

export const localeFlags: Record<Locale, string> = {
  et: '🇪🇪',
  en: '🇬🇧',
  fi: '🇫🇮',
};
