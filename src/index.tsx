import "./style";
import { render } from "preact";
import { useEffect } from "preact/hooks";
import useGlobal from "./store";
import { MainPage } from "./pages";
// import { StateContext } from "./context";

function App() {
  const [, actions] = useGlobal();
  useEffect(() => {
    actions.connectAndListen();

    return actions.removeAllListeners;
  }, []);

  return (
    <div class="container">
      <MainPage />
    </div>
  );
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
