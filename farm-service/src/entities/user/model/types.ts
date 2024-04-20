export interface User {
  email: Nullable<string>;
  id: Nullable<string>;
  is_active: Nullable<boolean>;
  is_superuser: Nullable<boolean>;
  is_verified: Nullable<boolean>;
  registered_at: Nullable<string>;
  role_id: Nullable<1 | 2>;
  username: Nullable<string>;
}
