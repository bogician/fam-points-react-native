export enum ERoles {
  user = 'user',
  admin = 'admin'
}

export interface IUser {
  email: string;
  role?: ERoles;
}

export interface IParticipant {
  description: string;
  email: string;
  points: number;
}

export interface IEvent {
  displayName: string;
  date: string;
  participants: Array<IParticipant>;
  season: string;
  listItem: string;
  fileUrl: string;
  description: string;
  name: string;
  participantsEmail: Array<string>;
  type: string;
}

export enum ELocalStoreKeys {
  TOKEN = 'idToken',
  EMAIL = 'email'
}
