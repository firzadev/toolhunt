import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { appRouter } from "./router/appRouter";

const app = new Elysia()
  // Plugins
  .use(html())
  .use(staticPlugin())
  // routers
  .use(appRouter)
  .listen(3200);

console.log(
  `🦊Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
