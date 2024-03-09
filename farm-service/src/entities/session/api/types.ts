export interface SessionDto {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

export interface RequestLoginBody {
  username: string;
  password: string;
}

export interface UserDto {
  id: number;
  email: Email;
}
