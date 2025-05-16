import { NavigationKeysType } from "@/types/app-types";

export const HOME_PATH = "/";

export const SERVICES_PATH = "/services";

export const BOOK_PATH = "/book";

export const CONTACTS_PATH = "/contacts";

export const ABOUT_PATH = "/about";

export const PATHS = [HOME_PATH, SERVICES_PATH, BOOK_PATH, CONTACTS_PATH, ABOUT_PATH] as const;

export const ROUTES: Record<NavigationKeysType, (typeof PATHS)[number]> = {
  SERVICES: SERVICES_PATH,
  CONTACTS: CONTACTS_PATH,
  HOME: HOME_PATH,
  BOOK: BOOK_PATH,
  ABOUT: ABOUT_PATH,
};
