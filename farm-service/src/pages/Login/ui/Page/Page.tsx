import Typography from "@mui/material/Typography";
import { LoginForm } from "@/features/authentication/login";
import { config } from "@/shared/lib";

export function LoginPage() {
  return (
    <div>
      <Typography display="flex" justifyContent={"center"}>
        Use {config.API_USER_EMAIL} / {config.API_USER_PASSWORD} as test user
        credentials
      </Typography>
      <LoginForm />
    </div>
  );
}
