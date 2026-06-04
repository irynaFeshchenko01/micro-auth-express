import { execSync } from "node:child_process";

const base =
  "node -r ts-node/register ./node_modules/typeorm/cli.js -d src/config/db.config.ts";

console.log("📊 Pending migrations:");

const pending = execSync(`${base} migration:show`, {
  encoding: "utf-8",
});

if (pending.includes("No migrations are pending")) {
  console.log("Nothing to run");
  process.exit(0);
}

console.log(`\nRunning migrations ${pending}\n`);

execSync(`${base} migration:run`, { stdio: "inherit" });