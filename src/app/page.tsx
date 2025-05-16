import { cookies } from "next/headers";

import { HOME_PATH } from "@/constants/routes";
import { redirect } from "@/i18n/routing";
import { getLocaleFromCookie } from "@/lib/utils";

export default async function Redirect() {
  const locale = await getLocaleFromCookie(cookies);
  redirect({ href: HOME_PATH, locale });
}
