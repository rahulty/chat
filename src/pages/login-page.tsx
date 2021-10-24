import { SignupForm } from "../comps/signup-form";
import { LoginForm } from "../comps/login-form";
import { Fragment } from "preact";

export function LoginPage() {
  return (
    <Fragment>
      <div id="loginNavbar">
        <div>Login</div>
        <div>Sign Up</div>
      </div>
      <div class="">
        <LoginForm />
      </div>
      <div class="">
        <SignupForm />
      </div>
    </Fragment>
  );
}
