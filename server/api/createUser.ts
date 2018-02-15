import * as db from "server/db";

interface CreateUserParams {
  email: string;
  password: string;
}

export async function createUser(params: CreateUserParams) {
  const data = await db.createUser({
    email: params.email,
    unencryptedPassword: params.password
  });

  console.log(data);

  return data;
}
