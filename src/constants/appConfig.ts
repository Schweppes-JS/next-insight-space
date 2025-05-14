import { LocalePrefixMode } from "next-intl/routing";

export const LOCALE_PREFIX: LocalePrefixMode = "always";

export const LOCALES = ["uk", "en"] as const;

export const DEFAULT_LOCALE = "uk" as const;
