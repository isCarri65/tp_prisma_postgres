import dotenv from "dotenv";
dotenv.config();
import { get } from "env-var";

export const envs = {
  path: get("PATH_URL").required().default("public").asString(),
  port: get("PORT").required().asPortNumber(),
};
