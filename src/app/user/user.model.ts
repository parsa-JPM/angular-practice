export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  // This means that the password property may or may not be present in the object.
  // In TypeScript, properties marked with ? can either be set to undefined,
  // or they can be omitted entirely when creating an object.
  password?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
