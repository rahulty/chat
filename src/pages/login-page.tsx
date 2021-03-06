import { SignupForm } from "../comps/signup-form";
import { LoginForm } from "../comps/login-form";
import { useState } from "preact/hooks";

export function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div id="loginContainer">
      <div id="loginNavbar">
        <div class="navBtns">
          <div
            class={`navBtn ${showLoginForm ? "active" : ""}`}
            onClick={() => setShowLoginForm(true)}
          >
            Login
          </div>
          <div
            class={`navBtn ${showLoginForm ? "" : "active"}`}
            onClick={() => setShowLoginForm(false)}
          >
            Sign Up
          </div>
        </div>
      </div>
      <div id="loginSlider" class={showLoginForm ? "" : "slide"}>
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}
