import { Fragment } from "preact";
import { Widget } from "../comps/widget";
import useGlobal from "../store";
import { ChatPage } from "./chat-page";
import { LoginPage } from "./login-page";

export function MainPage() {
  const [globalState, globalActions] = useGlobal();
  console.log("main", globalState.username);

  return (
    <div id="mainSlider" class={globalState.username ? "slide" : ""}>
      <div class="page" id="loginPage">
        <LoginPage />
      </div>
      <div class="page" id="chatPage">
        {globalState.username && (
          <Fragment>
            <div id="chatBox">
              <div id="navBar">
                <button onClick={globalActions.sendCommand}>Action</button>
                <button onClick={globalActions.logout}>Logout</button>
              </div>

              <ChatPage />
            </div>
            {globalState.showWidget && <Widget command={globalState.command} />}
          </Fragment>
        )}
      </div>
    </div>
  );
}
