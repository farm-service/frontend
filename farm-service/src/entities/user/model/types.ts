export type User = {
  email: string;
  id: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  registered_at: string;
  role_id: 1 | 2;
  username: string;
};
