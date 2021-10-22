import { Fragment } from "preact";
import { Widget } from "../comps/widget";
import useGlobal from "../store";
import { LoginForm } from "./login-form";
import { MessagePage } from "./message-page";

export function MainPage() {
  const [globalState, globalActions] = useGlobal();
  console.log("main", globalState.username);

  return (
    <div id="mainSlider" class={globalState.username ? "slide" : ""}>
      <div class="page">
        <LoginForm />
      </div>
      <div class="page">
        {globalState.username && (
          <Fragment>
            <div id="chatBox">
              <div id="navBar">
                <button onClick={globalActions.sendCommand}>Action</button>
                <button onClick={globalActions.logout}>Logout</button>
              </div>

              <MessagePage />
            </div>
            {globalState.showWidget && <Widget command={globalState.command} />}
          </Fragment>
        )}
      </div>
    </div>
  );
}
