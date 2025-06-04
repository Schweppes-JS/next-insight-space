import { HOME_PATH } from "@/constants/routes";
import withLocaleFromCookie from "@/hooks/withLocaleFromCookie";
import { redirect } from "@/i18n/routing";
import { LocalePropsType } from "@/types/app-types";

async function RedirectToLocale({ locale }: LocalePropsType["params"]) {
  return <>{redirect({ href: HOME_PATH, locale })}</>;
}

export default withLocaleFromCookie(RedirectToLocale);
