"use client";

import { useSearchParams } from "next/navigation";
import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@ui/select";
import { useLocale, useTranslations } from "next-intl";

import { LOCAL_STORAGE_LOCALE_KEY } from "@/constants/local-storage";
import { LOCALE_EN_CODE, LOCALE_UK_CODE } from "@/constants/locales";
import { usePathname, useRouter } from "@/i18n/routing";
import { AppLocaleType } from "@/types/app-types";

export const LanguageSwitcher = () => {
  const t = useTranslations("LANGUAGE_SWITCHER");
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (locale: AppLocaleType) => {
    localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale);
    router.replace({ pathname, query: Object.fromEntries(searchParams.entries()) }, { locale });
  };

  return (
    <Select onValueChange={changeLanguage} defaultValue={currentLocale}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("SELECT_LANGUAGE")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("AVAILABLE_LANGUAGES")}</SelectLabel>
          <SelectItem value={LOCALE_EN_CODE}>{t("ENGLISH")}</SelectItem>
          <SelectItem value={LOCALE_UK_CODE}>{t("UKRAINIAN")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
