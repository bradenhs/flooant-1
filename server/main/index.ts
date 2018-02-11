import { api, API } from "~/server/api";
import Koa, { Context } from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import serializeError from "serialize-error";
import { logger } from "~/server/logger";
import cors from "@koa/cors";

const app = new Koa();
const router = new Router();

const endpoints = Object.keys(api) as (keyof API)[];

endpoints.forEach(path => router.post(`/${path}`, createEndpoint(api[path])));

app.use(cors({ origin: "*" }));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(process.env.SERVER_PORT);

function createEndpoint(fn: Function) {
  return async (context: Context) => {
    try {
      context.body = await fn(...context.request.body);
      context.status = 200;
    } catch (error) {
      logger.error(`500 for ${context.path}`);
      context.body = serializeError(error);
      context.status = 500;
    }
  };
}
