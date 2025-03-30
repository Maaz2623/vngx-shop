import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./trpc/routers/_app.ts";
import cors from "cors";

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    console.log("context 3");
    return {};
  },
  // basePath: '/trpc/', // optional, defaults to '/'
}).listen(5000);
