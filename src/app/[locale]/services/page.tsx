import { getTranslations } from "next-intl/server";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GenerateMetadataType, ParamsPropsType } from "@/types/app-types";

export const generateMetadata: GenerateMetadataType = async ({ params }: ParamsPropsType) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "METADATA" });

  return {
    title: `${t("TITLE")} | ${t("SERVICES")}`,
    description: t("DESCRIPTION"),
  };
};

export default async function ServicesPage({ params }: ParamsPropsType) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SERVICES" });

  const services = [
    { key: "INDIVIDUAL", icon: "👤" },
    { key: "COUPLES", icon: "👥" },
    { key: "GROUP", icon: "👥👥" },
  ] as const;

  return (
    <main className="container py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{t("TITLE")}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon }) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span role="img" aria-label={t(`${key}.TITLE`)}>
                    {icon}
                  </span>
                  {t(`${key}.TITLE`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t(`${key}.DESCRIPTION`)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
