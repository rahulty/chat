import { Fragment } from "preact";
import { TextField } from "../comps/text-field";
import useGlobal from "../store";

export function LoginForm() {
  const [globalState, globalActions] = useGlobal();

  function onSubmit(e) {
    e.preventDefault();
    const {
      username: { value: username },
      password: { value: password }
    } = e.target;
    globalActions.login(username, password);
  }
  console.log(globalState.username);

  return (
    <Fragment>
      <div className="loginFormContainer">
        <h1>Login</h1>
        <form id="loginForm" onSubmit={onSubmit}>
          <TextField id="username" placeholder="Username" />
          <TextField type="password" id="password" placeholder="Password" />
          <input type="submit" value="Let's Chat" />
        </form>
      </div>
      <SignupForm />
    </Fragment>
  );
}

function SignupForm() {
  const [globalState, globalActions] = useGlobal();

  function onSubmit(e) {
    e.preventDefault();
    const {
      SU_username: { value: username },
      SU_password: { value: password }
    } = e.target;
    globalActions.signup(username, password);
  }

  return (
    <div className="signupFormContainer">
      <h1>Sign Up</h1>
      <form id="loginForm" onSubmit={onSubmit}>
        <TextField id="SU_username" placeholder="Username" />
        <TextField id="SU_password" type="password" placeholder="Password" />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
