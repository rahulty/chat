import { SignupForm } from "../comps/signup-form";
import { LoginForm } from "../comps/login-form";

export function LoginPage() {
  return (
    <div id="loginPage">
      <div id="loginNavbar">
        <div>Login</div>
        <div>Sign Up</div>
      </div>
      <div class="page">
        <LoginForm />
      </div>
      <div class="page">
        <SignupForm />
      </div>
    </div>
  );
}
