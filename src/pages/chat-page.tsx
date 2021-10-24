import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { TextField } from "../comps/text-field";
import useGlobal from "../store";

function MessageBox({ msg, by }) {
  return <div class={`msg ${by === "me" ? "myMsg" : "otherMsg"}`}>{msg}</div>;
}

export function ChatPage() {
  const [globalState, globalActions] = useGlobal();
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    globalState.socket.once("message", (res) => {
      setMsgs([{ msg: res.message, by: "other" }, ...msgs]);
    });
  }, [msgs]);

  function onSubmit(e) {
    e.preventDefault();
    globalActions.sendMessage(e.target.msg.value);
    setMsgs([{ msg: e.target.msg.value, by: "me" }, ...msgs]);
    e.target.msg.value = "";
  }

  return (
    <Fragment>
      <div id="chat">
        {msgs.map((m) => (
          <MessageBox msg={m.msg} by={m.by} />
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <TextField id="msg" placeholder="Type message..." />
        <input type="submit" value="Send" />
      </form>
    </Fragment>
  );
}
