import useGlobal from "../store";
import { Form } from "./form";
import { TextField } from "./text-field";

export function SignupForm() {
  const [, globalActions] = useGlobal();

  function onSubmit(e) {
    const {
      SU_username: { value: username },
      SU_password: { value: password }
    } = e.target;
    globalActions.signup(username, password);
  }

  return (
    <div className="signupFormContainer">
      <h1>Sign Up</h1>
      <Form id="signupForm" onSubmit={onSubmit}>
        <TextField id="SU_username" placeholder="Username" />
        <TextField id="SU_password" type="password" placeholder="Password" />
        <input type="submit" value="Sign Up" />
      </Form>
    </div>
  );
}
