import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HOME");

  return (
    <main className="flex-1">
      <section className="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">{t("TITLE")}</h1>
          <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">{t("SUBTITLE")}</p>
        </div>
      </section>
    </main>
  );
}
