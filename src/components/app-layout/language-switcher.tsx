import { useSearchParams } from "next/navigation";
import * as React from "react";

import { useLocale, useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    router.replace({ pathname, query: Object.fromEntries(searchParams.entries()) }, { locale });
  };

  return (
    <section className="flex flex-col gap-1">
      <Label className="mb-1">{t("LABEL")}</Label>
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
    </section>
  );
};
