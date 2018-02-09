import { api, APIEndpoint } from "~/server/api";
import Koa, { Context } from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

const endpoints = Object.keys(api) as (keyof api)[];

endpoints.forEach(path => router.post(path, createEndpoint(api[path])));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(process.env.SERVER_PORT);

function createEndpoint(fn: APIEndpoint) {
  return async (context: Context) => {
    let response: any;

    try {
      response = await fn(context.request.body);
    } catch (err) {
      context.status = 500;
    }

    context.response = response;
  };
}
