import { ComponentType } from "react";

import { LOCAL_STORAGE_LOCALE_KEY } from "@/constants/local-storage";
import { DEFAULT_LOCALE } from "@/constants/locales";
import { AppLocaleType } from "@/types/app-types";

const withLocaleFromLocalStorage = <T extends { locale: AppLocaleType }>(Component: ComponentType<T>) => {
  const WithLocale = (props: Omit<T, "locale">) => {
    const locale = (localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) as AppLocaleType) ?? DEFAULT_LOCALE;
    return <Component {...(props as T)} locale={locale} />;
  };

  WithLocale.displayName = `WithLocaleFromLocalStorage(${Component.displayName || Component.name || "Component"})`;
  return WithLocale;
};

export default withLocaleFromLocalStorage;
