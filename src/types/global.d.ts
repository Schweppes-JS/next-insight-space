import { routing } from "@/i18n/routing";

import type EnMessages from "../../messages/en.json";
import type UkMessages from "../../messages/uk.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof EnMessages | typeof UkMessages;
  }
}
