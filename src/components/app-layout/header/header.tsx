import Link from "next/link";

import { LanguageSwitcher } from "@app-layout/language-switcher/language-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@ui/navigation-menu";
import { getTranslations } from "next-intl/server";

import { HOME_PATH, ROUTES } from "@/constants/routes";
import { LocalePropsType, NavigationKeysType, PathsType } from "@/types/app-types";

export async function Header({ locale }: LocalePropsType["params"]) {
  const t = await getTranslations({ locale, namespace: "NAVIGATION" });

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container m-auto flex h-16 items-center">
        <Link href={`/${locale}${HOME_PATH}`} className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">Dr. Psychology</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {Object.entries<PathsType>(ROUTES).map(([translationKey, path]) => (
              <NavigationMenuItem key={translationKey + path}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link href={`/${locale}${path}`}>{t(translationKey as NavigationKeysType)}</Link>
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
