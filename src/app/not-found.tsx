import { cookies } from "next/headers";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INTER } from "@/constants/fonts";
import { HOME_PATH } from "@/constants/routes";
import { getLocaleFromCookie } from "@/lib/utils";

export default async function NotFound() {
  const locale = await getLocaleFromCookie(cookies);
  const t = await getTranslations({ locale });

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={INTER.className} suppressHydrationWarning>
        <div className="from-background to-muted/50 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b p-4 md:p-8">
          <Card className="relative w-full max-w-lg overflow-hidden border-2">
            <CardContent className="p-6">
              <div className="bg-primary/10 absolute top-0 right-0 h-16 w-16 animate-pulse rounded-bl-full" />
              <div className="bg-primary/10 absolute bottom-0 left-0 h-16 w-16 animate-pulse rounded-tr-full" />
              <div className="relative space-y-6 text-center">
                <div className="space-y-2">
                  <h1 className="animate-fade-up text-primary text-7xl font-bold tracking-tighter">404</h1>
                  <p className="animate-fade-up text-3xl font-semibold tracking-tight">{t("NOT_FOUND.TITLE")}</p>
                  <p className="text-muted-foreground animate-fade-up">{t("NOT_FOUND.DESCRIPTION")}</p>
                </div>
                <div className="mx-auto w-full max-w-xs space-y-3">
                  <div className="bg-border h-[1px] w-full" />
                  <Button asChild variant="default" className="w-full gap-2">
                    <Link href={`/${locale}${HOME_PATH}`}>
                      <ArrowLeft className="h-4 w-4" />
                      {t("NAVIGATION.HOME")}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}
