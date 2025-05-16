export type NavigationKeys = keyof (typeof import("../../messages/en.json"))["NAVIGATION"];

export const HOME_PATH = "/";

export const SERVICES_PATH = "/services";

export const BOOK_PATH = "/book";

export const CONTACTS_PATH = "/contacts";

export const BOOK_APPOINTMENT_PATH = "/book";

export const ROUTES: Record<NavigationKeys, string> = {
  BOOK_APPOINTMENT: BOOK_APPOINTMENT_PATH,
  SERVICES: SERVICES_PATH,
  CONTACTS: CONTACTS_PATH,
  HOME: HOME_PATH,
  BOOK: BOOK_PATH,
};
