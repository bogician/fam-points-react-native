export enum ERoles {
  user = 'user',
  admin = 'admin'
}

export interface IUser {
  email: string;
  role?: ERoles;
}

export enum ELocalStoreKeys {
  TOKEN = 'idToken',
  EMAIL = 'email'
}
