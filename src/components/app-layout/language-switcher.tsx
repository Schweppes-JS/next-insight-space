"use client";

import { useSearchParams } from "next/navigation";
import * as React from "react";

import { useLocale, useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LOCALES } from "@/constants/appConfig";
import { usePathname, useRouter } from "@/i18n/routing";

type LocaleType = (typeof LOCALES)[number];

export const LanguageSwitcher = () => {
  const t = useTranslations("LANGUAGE_SWITCHER");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as LocaleType;

  const changeLanguage = (lang: LocaleType) => {
    router.replace({ pathname, query: Object.fromEntries(searchParams.entries()) }, { locale: lang });
  };

  return (
    <section className="flex flex-col gap-1">
      <Label className="mb-1">{t("LABEL")}</Label>
      <Select onValueChange={changeLanguage} defaultValue={locale}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("SELECT_LANGUAGE")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("AVAILABLE_LANGUAGES")}</SelectLabel>
            <SelectItem value="en">{t("ENGLISH")}</SelectItem>
            <SelectItem value="uk">{t("UKRAINIAN")}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
};
