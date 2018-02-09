import { api, isOk } from "./api";

console.log("starting");
start();

async function start() {
  const response = await api.add(1, 2);

  if (isOk(response)) {
    console.log("Ok", response.result);
  } else {
    console.log("Not ok", response);
  }
}
