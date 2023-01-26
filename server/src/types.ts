export enum DBField {
  MESSAGES = "messages",
  USERS = "users",
}

export interface Message {
  id: string;
  text: string;
  userId: string;
  createdAt: number;
}

export type Messages = Message[];

export interface User {
  id: string;
  nickname: string;
}

export type Users = User[];
export interface Resolver {
  [key: string]: {
    [key: string]: (
      parent: any,
      variables: { [key: string]: any },
      context: {
        db: {
          messages: Messages;
          users: Users;
        };
      }
    ) => any;
  };
}
