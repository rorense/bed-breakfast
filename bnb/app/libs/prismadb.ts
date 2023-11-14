import { PrismaClient } from "@prisma/client";

// Prsima Client initialising

declare global {
  var prisma: PrismaClient | undefined;
}

// TO work with Next 13
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
