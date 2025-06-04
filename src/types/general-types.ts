import { AppLocaleType } from "./app-types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type AnyArrayType = Array<AnyType>;

export type AnyFunctionType = (...args: AnyArrayType) => AnyType;

export type AnyObjectType = Record<string, AnyType>;

export type ErrorPagePropsType = {
  error: Error & { digest?: string };
  locale: AppLocaleType;
  reset: () => void;
};
