import { Button } from "@ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@ui/card";
import { AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { ErrorPagePropsType } from "@/types/general-types";

export default function ResetCard({ error, reset }: ErrorPagePropsType) {
  const t = useTranslations("ERROR");

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <AlertCircle className="text-destructive h-6 w-6" />
            <h2 className="text-2xl font-semibold tracking-tight">{t("TITLE")}</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-destructive/10 rounded-lg p-4">
            <p className="text-destructive text-sm">{error.message}</p>
            {error.digest && (
              <p className="text-muted-foreground mt-2 text-xs">
                {t("ERROR_ID")}: {error.digest}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} className="w-full cursor-pointer" variant="default">
            {t("TRY_AGAIN")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
