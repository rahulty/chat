import useGlobal from "../store";

export function Snackbar() {
  const [globalState] = useGlobal();
  console.log("snackme", globalState.snackMessage);
  return (
    <div
      id="snackbarContainer"
      class={globalState.showSnackbar ? "snackSlide" : ""}
    >
      <div id="snackbar">{globalState.snackMessage}</div>
    </div>
  );
}
