import { cookies } from "next/headers";
import { ComponentType } from "react";

import { getLocaleFromCookie } from "@/lib/utils";
import { AppLocaleType } from "@/types/app-types";

const withLocaleFromCookie = <T extends { locale: AppLocaleType }>(Component: ComponentType<T>) => {
  const WithLocale = async (props: Omit<T, "locale">) => {
    const locale = await getLocaleFromCookie(cookies);
    return <Component {...(props as T)} locale={locale} />;
  };

  WithLocale.displayName = `WithLocaleFromCookie(${Component.displayName || Component.name || "Component"})`;
  return WithLocale;
};

export default withLocaleFromCookie;
