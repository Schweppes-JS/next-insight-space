import * as React from "react";
import { PropsWithChildren, useEffect, useState } from "react";

import { NextIntlClientProvider } from "next-intl";

import { AppLocaleType } from "@/types/app-types";

export const IntlClientProvider = ({ children, locale }: PropsWithChildren<{ locale: AppLocaleType }>) => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    import(`../../messages/${locale}.json`).then((module) => setMessages(module.default));
  }, [locale]);

  return messages ? (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  ) : null;
};
