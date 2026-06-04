import app from "./app";
import { AppDataSource } from "./config/db.config";
import { env } from "./config/env";


async function bootsrtap() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Error during Data Source initialization", error);
  }
}


bootsrtap()
