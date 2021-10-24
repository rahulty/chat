import { Fragment } from "preact";
import { Form } from "../comps/form";
import { TextField } from "./text-field";
import useGlobal from "../store";

export function LoginForm() {
  const [globalState, globalActions] = useGlobal();

  function onSubmit(e) {
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
        <Form id="loginForm" onSubmit={onSubmit}>
          <TextField autofocus id="username" placeholder="Username" />
          <TextField type="password" id="password" placeholder="Password" />
          <input type="submit" value="Let's Chat" />
        </Form>
      </div>
    </Fragment>
  );
}
