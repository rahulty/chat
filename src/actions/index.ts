import { io } from "socket.io-client";

export const login = (store, username) => {
  store.setState({ username });
};

export const logout = (store) => {
  store.setState({ username: null });
};

export const connectAndListen = (store) => {
  const socket = io("https://demo-chat-server.on.ag");
  socket.on("message", (msg) => {
    console.log(msg);
  });
  socket.on("connect", () => {
    console.log("id:", socket.id);
  });
  socket.on("command", (response) => {
    console.log("command", response);
    store.setState({ command: response.command, showWidget: true });
  });
  socket.emit("command");
  store.setState({ socket });
};

export const sendMessage = (store, message) => {
  store.state.socket.emit("message", {
    author: store.state.username,
    message
  });
};

export const sendCommand = (store, message) => {
  store.state.socket.emit("command");
};

export const removeAllListeners = (store) => {
  store.socket.removeAllListeners("message").removeAllListeners("command");
};

export const setShowWidget = (store, showWidget: boolean) => {
  store.setState({
    showWidget,
    command: showWidget ? store.state.command : null
  });
};
