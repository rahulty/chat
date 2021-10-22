import * as Preact from "preact/compat";
import globalHook from "use-global-hook";
import * as actions from "./actions";

const initialState = {
  username: null,
  socket: null,
  showWidget: false,
  command: null
};

const useGlobal = globalHook(Preact, initialState, actions);

export default useGlobal;
