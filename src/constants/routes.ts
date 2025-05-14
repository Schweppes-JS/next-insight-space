export type NavigationKeys = keyof (typeof import("../../messages/en.json"))["NAVIGATION"];

export const ROUTES: Record<NavigationKeys, string> = {
  HOME: "/",
  SERVICES: "/services",
  BOOK: "/book",
  CONTACTS: "/contacts",
  BOOK_APPOINTMENT: "/book",
};
