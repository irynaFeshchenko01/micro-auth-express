import { execSync } from "node:child_process";

const base =
  "node -r ts-node/register ./node_modules/typeorm/cli.js -d src/config/db.config.ts";

console.log("📊 Checking migrations...\n");

const status = execSync(`${base} migration:show`, {
  encoding: "utf-8",
});

if (status.includes("No migrations are run")) {
  console.log("Nothing to revert");
  process.exit(0);
}

console.log("\nReverting last migration...\n");

execSync(`${base} migration:revert`, { stdio: "inherit" });

console.log("\nRevert completed");