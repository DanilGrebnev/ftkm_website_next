const DEFAULT_SITE_URL = "http://mitlp.vstu.ru:8090";

/** Строка подключения MongoDB (только из .env). Пустая на клиенте допустима. */
export const MONGODB_URI = process.env.MONGODB_URI?.trim() ?? "";

export const SECRET_JWT = process.env.SECRET_JWT || "default-secret-change-me";

export const NODE_ENV = process.env.NODE_ENV ?? "development";

export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as
  | string
  | undefined;

/** Базовый URL сайта для метаданных; при отсутствии env — дефолт как раньше в site.ts */
export const NEXT_PUBLIC_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

export const ADMIN_LOGIN = process.env.ADMIN_LOGIN;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const NEXT_RUNTIME = process.env.NEXT_RUNTIME;
