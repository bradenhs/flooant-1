import * as bundle from "./bundle";
import { Context } from "koa";

export type APIEndpoint = (params: any, context?: Context) => any;

export const api = bundle as { [endpoint: string]: APIEndpoint };
export type api = typeof api;
