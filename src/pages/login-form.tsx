import { TextField } from "../comps/text-field";
import useGlobal from "../store";

export function LoginForm() {
  const [globalState, globalActions] = useGlobal();

  function onSubmit(e) {
    e.preventDefault();
    globalActions.login(e.target.usr.value);
  }
  console.log(globalState.username);

  return (
    <div className="loginFormContainer">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <TextField id="usr" placeholder="Username" />
        <input type="submit" value="Let's Chat" />
      </form>
    </div>
  );
}
