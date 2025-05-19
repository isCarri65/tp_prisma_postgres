import { envs } from "./config/env";
import { createServer } from "./server";

const main = () => {
  createServer(envs);
};

(async () => {
  await main();
})();
