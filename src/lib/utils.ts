import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { USER_LOCALE_KEY } from "@/constants/cookies";
import { DEFAULT_LOCALE } from "@/constants/locales";
import { AppLocaleType } from "@/types/app-types";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getLocaleFromCookie = async (cookies: () => Promise<ReadonlyRequestCookies>) => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(USER_LOCALE_KEY);
  return (localeCookie?.value as AppLocaleType) || DEFAULT_LOCALE;
};
