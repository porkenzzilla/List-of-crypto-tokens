export interface IUser {
  id: string;
  name: string;
  role: USER_ROLE;
}

export enum USER_ROLE {
  USER,
  ADMIN,
}
