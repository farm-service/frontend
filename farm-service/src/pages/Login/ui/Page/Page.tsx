import { LoginForm } from "@/features/authentication/login";
import { config } from "@/shared/config";

export function LoginPage() {
  return (
    <div>
      <h1>Login page</h1>
      <p>
        Use {config.API_USER_EMAIL} / {config.API_USER_PASSWORD} as test user
        credentials
      </p>
      <LoginForm />
    </div>
  );
}
