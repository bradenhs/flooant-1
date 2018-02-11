import Datastore from "@google-cloud/datastore";

const datastore = new Datastore({});

const enum EntityKind {
  User = "User"
}

interface UserDB {
  email: string;
  encryptedPassword: string;
}

interface CreateUserParams {
  email: string;
  unencryptedPassword: string;
}

export async function createUser(params: CreateUserParams) {
  const key = datastore.key([EntityKind.User]);

  return await datastore.save({
    key,
    data: {
      email: params.email,
      encryptedPassword: params.unencryptedPassword
    } as UserDB
  });
}
