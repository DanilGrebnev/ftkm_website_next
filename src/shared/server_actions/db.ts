import mongoose from "mongoose";

/** Поля, которые в URI должны быть percent-encoded */
const MONGO_URI_ENCODE_KEYS = new Set([
  "MONGO_INITDB_ROOT_USERNAME",
  "MONGO_INITDB_ROOT_PASSWORD",
]);

function expandMongoUriTemplate(template: string): string {
  return template.replace(/\$\{([A-Z0-9_]+)\}/gi, (_, key: string) => {
    const value = process.env[key];
    if (value === undefined || value === "") {
      throw new Error(
        `MONGODB_URI ссылается на ${key}, но переменная не задана в окружении`
      );
    }
    return MONGO_URI_ENCODE_KEYS.has(key)
      ? encodeURIComponent(value)
      : value;
  });
}

function buildMongoUriFromParts(): string {
  const user = process.env.MONGO_INITDB_ROOT_USERNAME;
  const pass = process.env.MONGO_INITDB_ROOT_PASSWORD;
  const host = process.env.MONGO_DB_HOST ?? "localhost";
  const port = process.env.MONGO_DB_PORT ?? "27017";
  const db = process.env.MONGO_AUTH_DB ?? "admin";
  if (!user || !pass) {
    throw new Error(
      "Задайте MONGODB_URI или пару MONGO_INITDB_ROOT_USERNAME + MONGO_INITDB_ROOT_PASSWORD и MONGO_DB_HOST / MONGO_DB_PORT / MONGO_AUTH_DB"
    );
  }
  return `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(pass)}@${host}:${port}/${db}`;
}

function resolveMongoUri(): string {
  const raw = process.env.MONGODB_URI?.trim();
  if (!raw) {
    return buildMongoUriFromParts();
  }
  if (raw.includes("${")) {
    return expandMongoUriTemplate(raw);
  }
  return raw;
}

const MONGODB_URI = resolveMongoUri();

let cached = (global as any).mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error(
      "Ошибка подключения к базе данных:",
      error instanceof Error ? error.message : error
    );
    cached.promise = null;
    cached.conn = null;
    throw error;
  }
}
