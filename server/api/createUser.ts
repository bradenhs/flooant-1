interface CreateUserParams {
  theemail: string;
  firstName: string;
  password: string;
}

export async function createUser(params: CreateUserParams) {
  return Promise.resolve(params);
}
