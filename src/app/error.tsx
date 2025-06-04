"use client";

import Document from "@app-layout/document/document";
import ResetCard from "@pages/error/reset-card";

import withLocaleFromLocalStorage from "@/hooks/withLocaleFromLocalStorage";
import { IntlClientProvider } from "@/i18n/providers";
import { ErrorPagePropsType } from "@/types/general-types";

function Error(props: ErrorPagePropsType) {
  return (
    <Document locale={props.locale}>
      <IntlClientProvider locale={props.locale}>
        <ResetCard {...props} />
      </IntlClientProvider>
    </Document>
  );
}

export default withLocaleFromLocalStorage(Error);
