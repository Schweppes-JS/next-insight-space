"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationKeys, ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/routing";

import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("NAVIGATION");
  const locale = useLocale();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href={`/${locale}`} className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">Dr. Psychology</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {Object.entries(ROUTES).map(([key, value]) => (
              <NavigationMenuItem key={key + value}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link href={value}>{t(key as NavigationKeys)}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
