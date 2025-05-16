import { getTranslations } from "next-intl/server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GenerateMetadataType, ParamsPropsType } from "@/types/app-types";

export const generateMetadata: GenerateMetadataType = async ({ params }: ParamsPropsType) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "METADATA" });

  return {
    title: `${t("TITLE")} | ${t("CONTACTS")}`,
    description: t("DESCRIPTION"),
  };
};

export default async function ContactsPage({ params }: ParamsPropsType) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CONTACTS" });

  const contacts = [
    { key: "EMAIL", value: "dr.psychology@example.com", icon: "✉️" },
    { key: "PHONE", value: "+380 XX XXX XX XX", icon: "📞" },
    { key: "ADDRESS", value: "Kyiv, Ukraine", icon: "📍" },
    { key: "SOCIAL", value: "@dr.psychology", icon: "🔗" },
  ] as const;

  return (
    <main className="container py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{t("TITLE")}</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map(({ key, value, icon }) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span role="img" aria-label={t(key)}>
                    {icon}
                  </span>
                  {t(key)}
                </CardTitle>
              </CardHeader>
              <CardContent>{value}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
