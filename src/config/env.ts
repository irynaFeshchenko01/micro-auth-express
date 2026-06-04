import dotenv from "dotenv";
import { Config } from "../models/config";

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    console.error(`Missing env variable: ${name}`);
    process.exit(1);
  }

  return value;
}

export const env: Config = {
  port: Number(requireEnv("PORT")),
  dbConfig: {
    host: requireEnv("DB_HOST"),
    user: requireEnv("DB_USER"),
    password: requireEnv("DB_PASSWORD"),
    name: requireEnv("DB_NAME"),
    port: Number(requireEnv("DB_PORT")),
  },
};
