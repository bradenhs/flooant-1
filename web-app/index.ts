import { API } from "~/server/api";

const endpoints = new Map<string, Function>();

export const api = new Proxy({}, { get }) as API;

function get(path: string) {
  if (endpoints.has(path)) {
    return endpoints.get(path);
  }

  const endpoint = createEndpoint(path);
  endpoints.set(path, endpoint);
  return endpoint;
}

function createEndpoint(path: string) {
  return async (...args: any[]) => {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(args)
    });

    return response.json();
  };
}
