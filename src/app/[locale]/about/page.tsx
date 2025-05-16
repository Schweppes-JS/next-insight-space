import { getTranslations } from "next-intl/server";

import { GenerateMetadataType, ParamsPropsType } from "@/types/app-types";

export const generateMetadata: GenerateMetadataType = async ({ params }: ParamsPropsType) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "METADATA" });
  return { title: t("ABOUT"), description: t("ABOUT_DESCRIPTION") };
};

export default async function AboutPage({ params }: ParamsPropsType) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ABOUT" });

  return (
    <main className="container py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{t("TITLE")}</h1>
          <p className="text-muted-foreground text-lg">{t("SUBTITLE")}</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("EXPERIENCE.TITLE")}</h2>
            <p className="text-muted-foreground">{t("EXPERIENCE.DESCRIPTION")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("APPROACH.TITLE")}</h2>
            <p className="text-muted-foreground">{t("APPROACH.DESCRIPTION")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("EDUCATION.TITLE")}</h2>
            <p className="text-muted-foreground">{t("EDUCATION.DESCRIPTION")}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
