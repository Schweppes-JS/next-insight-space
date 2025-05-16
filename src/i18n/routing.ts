import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { USER_LOCALE_KEY } from "@/constants/cookies";
import { DEFAULT_LOCALE, LOCALES, LOCALE_PREFIX } from "@/constants/locales";

export const routing = defineRouting({
  localeCookie: { name: USER_LOCALE_KEY, maxAge: 60 * 60 * 24 * 365 },
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: LOCALE_PREFIX,
  locales: LOCALES,
});

export const { Link, redirect, usePathname, useRouter, getPathname, permanentRedirect } = createNavigation(routing);
