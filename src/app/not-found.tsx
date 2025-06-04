import Document from "@app-layout/document/document";
import HomeNavigationCard from "@pages/not-found/home-navigation-card";

import withLocaleFromCookie from "@/hooks/withLocaleFromCookie";
import { LocalePropsType } from "@/types/app-types";

export const dynamic = "force-dynamic";

async function NotFound({ locale }: LocalePropsType["params"]) {
  return (
    <Document locale={locale}>
      <HomeNavigationCard locale={locale} />
    </Document>
  );
}

export default withLocaleFromCookie(NotFound);
