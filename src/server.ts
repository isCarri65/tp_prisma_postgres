import express from "express";
import { PrismaClient } from "@prisma/client";
import routerUsuario from "./routes/usuarios";

export const createServer = (options: { port: number; path: string }) => {
  const prisma = new PrismaClient();
  const app = express();

  app.use(express.json());

  app.use("/usuarios", routerUsuario);

  app.listen(options.port, () => {
    console.log(`server levantado en el puerto: ${options.port}`);
  });
};
//npx prisma generate
//npx prisma migrate dev --name init
