import { execSync } from "node:child_process";
import { createInterface } from "node:readline";

function toMigrationName(name: string): string {
  const safeName = name
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");

  return safeName;
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Migration name: ", (name: string) => {
  if (!name) {
    console.log("Name is required");
    process.exit(1);
  }

  const migrationName = toMigrationName(name);

  const cmd = `node -r ts-node/register ./node_modules/typeorm/cli.js migration:generate migrations/${migrationName} -d src/config/db.config.ts`;

  console.log(`Running: ${cmd}`);

  execSync(cmd, { stdio: "inherit" });

  rl.close();
});