export type SessionUserId = Brand<Id, "SessionUserId">;

export interface Session {
  accessToken: string;
  userId: SessionUserId;
}

export interface User {
  id: Id;
  email: Email;
}
