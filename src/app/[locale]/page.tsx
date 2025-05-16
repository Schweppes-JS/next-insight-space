import { getTranslations } from "next-intl/server";

import { GenerateMetadataType, ParamsPropsType } from "@/types/app-types";

export const generateMetadata: GenerateMetadataType = async ({ params }: ParamsPropsType) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "METADATA" });
  return { title: t("TITLE"), description: t("DESCRIPTION") };
};

export default async function HomePage({ params }: ParamsPropsType) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HOME" });

  return (
    <main className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{t("TITLE")}</h1>
      <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">{t("SUBTITLE")}</p>
    </main>
  );
}
