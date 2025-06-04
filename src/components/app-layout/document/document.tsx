import Head from "next/head";
import { PropsWithChildren } from "react";

import { INTER } from "@/constants/fonts";
import { AppLocaleType } from "@/types/app-types";

export default function Document({ children, locale }: PropsWithChildren<{ locale: AppLocaleType }>) {
  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </Head>
      <body className={INTER.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
