import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { Header } from "@/components/app-layout/header";
import { LOCALES } from "@/constants/appConfig";
import { INTER } from "@/constants/fonts";
import { GenerateMetadataType, LayoutPropsType } from "@/types/app-types";

import "@/styles/globals.css";

export default async function RootLayout({ children, params }: LayoutPropsType) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) notFound();
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={INTER.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const generateMetadata: GenerateMetadataType = async ({ params }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "METADATA" });
  return {
    icons: { icon: [{ url: "/favicon.ico" }], apple: [{ url: "/apple-icon.png" }] },
    description: t("DESCRIPTION"),
    title: t("TITLE"),
  };
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
