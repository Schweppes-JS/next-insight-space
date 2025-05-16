import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { GenerateMetadataType, ParamsPropsType } from "@/types/app-types";

export const generateMetadata: GenerateMetadataType = async ({ params }: ParamsPropsType) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "METADATA" });

  return {
    title: `${t("TITLE")} | ${t("BOOK")}`,
    description: t("DESCRIPTION"),
  };
};

export default async function BookPage({ params }: ParamsPropsType) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BOOK" });

  return (
    <main className="container py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{t("TITLE")}</h1>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">{t("DESCRIPTION")}</p>
            {/* Booking form will be added here */}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
