import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { DEFAULT_LOCALE, LOCALES, LOCALE_PREFIX } from "@/constants/appConfig";

export const routing = defineRouting({ locales: LOCALES, defaultLocale: DEFAULT_LOCALE, localePrefix: LOCALE_PREFIX });

export const { Link, redirect, usePathname, useRouter, getPathname, permanentRedirect } = createNavigation(routing);
