import { type Metadata } from "next";

import { type LOCALES } from "@/constants/locales";
import { PATHS } from "@/constants/routes";

export type AppLocaleType = (typeof LOCALES)[number];

export type ParamsPropsType = { params: Promise<{ locale: AppLocaleType }> };

export type GenerateMetadataType = (props: ParamsPropsType) => Promise<Metadata>;

export type LayoutPropsType = Readonly<{ children: React.ReactNode; params: Promise<{ locale: AppLocaleType }> }>;

export type LocalePropsType = { params: { locale: AppLocaleType }; searchParams: Record<string, string> };

export type NavigationKeysType = keyof (typeof import("../../messages/en.json"))["NAVIGATION"];

export type PathsType = (typeof PATHS)[number];
