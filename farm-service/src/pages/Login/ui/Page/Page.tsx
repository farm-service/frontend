import { LoginForm } from "@/features/authentication/login";
import { config } from "@/shared/lib";

export function LoginPage() {
  return (
    <div>
      <p>
        Use {config.API_USER_EMAIL} / {config.API_USER_PASSWORD} as test user
        credentials
      </p>
      <LoginForm />
    </div>
  );
}
