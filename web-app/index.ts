import { api, isOk } from "./api";

start();

async function start() {
  const response = await api.createUser({
    email: "snellinbox@gmail.com",
    password: "1234"
  });

  if (isOk(response)) {
    console.log("Ok", response.result);
  } else {
    console.log("Not ok", response);
  }
}
